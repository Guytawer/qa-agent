// Deterministic grader for one saved change set against an eval case in evals/suite/<id>.json.
//   npm run grade -- 10506                      grades changes/excalidraw-10506.md
//   npm run grade -- 10506 --file <path>         grades another file (for example, an old run from git)
//   npm run grade -- 10506 --label "run 8" --record   also appends the result to evals/results.jsonl
// It only reads files: no model, no network.
import { appendFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

type Pattern = { name: string; any?: string[]; all?: string[] };
type Forbidden = { name: string; pattern: string };
export type EvalCase = {
  id: string;
  title: string;
  issue: number;
  bounds: { cases_min: number; cases_max: number; high_max_share: number };
  must_update: string[];
  must_cover: Pattern[];
  must_not: Forbidden[];
};
export type Check = { group: string; name: string; pass: boolean; detail?: string };
export type Grade = {
  case: string;
  label: string;
  file: string;
  checks: Check[];
  passed: number;
  total: number;
  score: number;
  metrics: { cases: number; high: number; verify: number; template_ok: number };
};

type Case = { id: string; header: string[]; body: string };

function splitCases(content: string): Case[] {
  // Keep only the parts that start with a case heading; text before the first case is the change set header.
  const parts = content.split(/^(?=#{2,3}\s+(?:C|TC)-\d+\b)/m).filter((p) => /^#{2,3}\s+(?:C|TC)-\d+\b/.test(p));
  return parts.map((part) => {
    const id = part.match(/^#{2,3}\s+((?:C|TC)-\d+)/)![1];
    const lines = part.split("\n");
    return { id, header: lines.slice(1, 6).map((l) => l.trim()), body: part };
  });
}

// The case template from config/conventions.md: Action, Area, "Priority · Type", Tags, in this order.
function followsTemplate(c: Case): boolean {
  const [action, area, priority, tags] = c.header;
  return (
    /^Action: (update|retire) (C|TC)-\d+$|^Action: create$|^Action: keep (C|TC)-\d+$/.test(action ?? "") &&
    /^Area: \S/.test(area ?? "") &&
    /^Priority: (High|Medium|Low) · Type: (functional|negative|boundary|permissions|regression)$/.test(priority ?? "") &&
    /^Tags: #\d+/.test(tags ?? "")
  );
}

export function grade(spec: EvalCase, content: string, label = "", file = ""): Grade {
  const cases = splitCases(content);
  const checks: Check[] = [];
  const add = (group: string, name: string, pass: boolean, detail?: string) => checks.push({ group, name, pass, detail });

  // Shape of the suite.
  const n = cases.length;
  add("shape", `${spec.bounds.cases_min} to ${spec.bounds.cases_max} cases`, n >= spec.bounds.cases_min && n <= spec.bounds.cases_max, `${n} cases`);
  const high = cases.filter((c) => /Priority: High\b/.test(c.body)).length;
  add("shape", `High at most ${Math.round(spec.bounds.high_max_share * 100)}%`, n > 0 && high / n <= spec.bounds.high_max_share, `${high} of ${n}`);
  const templateOk = cases.filter(followsTemplate).length;
  add("shape", "every case follows the template", n > 0 && templateOk === n, `${templateOk} of ${n}`);
  const complete = cases.filter((c) => /^Steps:/m.test(c.body) && /^Expected result:/m.test(c.body)).length;
  add("shape", "every case has steps and an expected result", n > 0 && complete === n, `${complete} of ${n}`);

  // Existing cases that must be updated, not duplicated.
  for (const id of spec.must_update) {
    const c = cases.find((x) => x.id === id);
    add("update", `${id} is updated`, !!c && /Action: update/.test(c.body), c ? undefined : "missing");
  }

  // Behaviors the approved answers require.
  for (const p of spec.must_cover) {
    const test = (re: string) => new RegExp(re, "i").test(content);
    const pass = p.all ? p.all.every(test) : (p.any ?? []).some(test);
    add("coverage", p.name, pass);
  }

  // Content that must never appear.
  for (const f of spec.must_not) {
    const m = content.match(new RegExp(f.pattern, "i"));
    add("forbidden", f.name, !m, m ? `found "${m[0].slice(0, 60)}"` : undefined);
  }

  const passed = checks.filter((c) => c.pass).length;
  return {
    case: spec.id,
    label,
    file,
    checks,
    passed,
    total: checks.length,
    score: Math.round((passed / checks.length) * 100) / 100,
    metrics: { cases: n, high, verify: (content.match(/\(verify/g) ?? []).length, template_ok: templateOk },
  };
}

export async function loadCase(id: string): Promise<EvalCase> {
  return JSON.parse(await readFile(path.join(REPO, "evals", "suite", `${id}.json`), "utf8"));
}

function print(g: Grade) {
  console.log(`\n${g.case}${g.label ? ` (${g.label})` : ""}: ${g.passed}/${g.total} checks, score ${g.score}`);
  console.log(`  cases ${g.metrics.cases}, High ${g.metrics.high}, (verify) ${g.metrics.verify}, template ${g.metrics.template_ok}/${g.metrics.cases}`);
  for (const c of g.checks.filter((x) => !x.pass)) console.log(`  FAIL [${c.group}] ${c.name}${c.detail ? `: ${c.detail}` : ""}`);
}

// Command line.
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const id = args[0];
  if (!id) {
    console.log("Usage: npm run grade -- <case id> [--file <path>] [--label <text>] [--record]");
    process.exit(1);
  }
  const opt = (name: string) => {
    const i = args.indexOf(name);
    return i >= 0 ? args[i + 1] : undefined;
  };
  const spec = await loadCase(id);
  const file = opt("--file") ?? path.join(REPO, "changes", `excalidraw-${spec.issue}.md`);
  const result = grade(spec, await readFile(file, "utf8"), opt("--label") ?? "", path.relative(REPO, file));
  print(result);
  if (args.includes("--record")) {
    const line = JSON.stringify({ at: new Date().toISOString(), ...result, checks: result.checks.filter((c) => !c.pass) }) + "\n";
    await appendFile(path.join(REPO, "evals", "results.jsonl"), line, "utf8");
    console.log("  recorded in evals/results.jsonl");
  }
}
