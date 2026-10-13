// Eval runner: drives Claude Code headless through the whole gated workflow for one eval case.
//   npm run eval -- doctor                         one short turn: which skills and tools the agent sees
//   npm run eval -- 10506 --runs 3 --label v0.9    three runs, graded and recorded
//
// Each run gets its own workspace in the temp folder: a copy of the skill, a copy of the knowledge base
// (without pending decisions for the case's own issue, so every run starts like a fresh ticket),
// and empty state and changes folders. Nothing in the repository is changed except evals/runs/ and
// evals/results.jsonl.
//
// The runner plays the product owner (it sends the case's decisions) and the approver (it runs the
// approve command with "y"). This is only for evals: in real use, approvals come from a person.
import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, appendFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { grade, loadCase, type EvalCase } from "./grade.js";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const SERVER = path.join(REPO, "mcp-server", "dist", "index.js");
const APPROVE = path.join(REPO, "mcp-server", "dist", "approve.js");
const MAX_TURNS = 12;
const TURN_TIMEOUT_MS = 20 * 60 * 1000;

// Least privilege: the only built-in tools are Read (the skill reads its config files) and Skill;
// every qa-agent tool is allowed; nothing else is, and nothing can prompt for permission.
const BUILTIN_TOOLS = process.env.QA_EVAL_TOOLS ?? "Read,Skill";
const ALLOWED = ["mcp__qa-agent", "mcp__qa-agent__*", "Read", "Skill"];
// Only the project's own settings and skills: the user's skills and plugins (including a copy of
// qa-case-writer uploaded to the account) must not compete with the version under test.
const SETTING_SOURCES = process.env.QA_EVAL_SETTING_SOURCES ?? "project";

type Workspace = { dir: string; env: NodeJS.ProcessEnv; mcpConfig: string };

function makeWorkspace(spec: EvalCase | null, name: string): Workspace {
  const dir = path.join(tmpdir(), `qa-eval-${name}-${Date.now()}`);
  mkdirSync(path.join(dir, ".claude", "skills"), { recursive: true });
  cpSync(path.join(REPO, "skills", "qa-case-writer"), path.join(dir, ".claude", "skills", "qa-case-writer"), { recursive: true });
  cpSync(path.join(REPO, "knowledge"), path.join(dir, "knowledge"), { recursive: true });
  if (spec) rmSync(path.join(dir, "knowledge", "pending", `issue-${spec.issue}.md`), { force: true });
  writeFileSync(path.join(dir, "knowledge", "proposals.json"), "[]\n");
  const env = {
    QA_STATE_DIR: path.join(dir, "state"),
    QA_CHANGES_DIR: path.join(dir, "changes"),
    QA_KNOWLEDGE_DIR: path.join(dir, "knowledge"),
    QA_CASES_DIR: path.join(REPO, "cases"),
    QA_FIXTURES_DIR: path.join(REPO, "fixtures"),
  };
  const mcpConfig = path.join(dir, "mcp.json");
  writeFileSync(mcpConfig, JSON.stringify({ mcpServers: { "qa-agent": { command: "node", args: [SERVER], env } } }, null, 2));
  return { dir, env: { ...process.env, ...env }, mcpConfig };
}

type TurnResult = { text: string; tools: string[]; isError: boolean; raw: unknown };

function claudeTurn(ws: Workspace, sessionId: string, first: boolean, message: string): TurnResult {
  const args = [
    "-p",
    "--output-format", "stream-json",
    "--verbose",
    first ? "--session-id" : "--resume", sessionId,
    "--mcp-config", ws.mcpConfig,
    "--strict-mcp-config",
    "--tools", BUILTIN_TOOLS,
    "--allowedTools", ...ALLOWED,
    "--permission-prompts", "none",
    "--setting-sources", SETTING_SOURCES,
  ];
  // On Windows "claude" is a .cmd file that needs a shell; pass one quoted command line instead of
  // an argument list, so nothing is concatenated unescaped.
  const quote = (a: string) => (/^[\w@%+=:,./\\-]+$/.test(a) ? a : `"${a.replace(/"/g, '\\"')}"`);
  const run = spawnSync(["claude", ...args].map(quote).join(" "), {
    cwd: ws.dir,
    input: message,
    encoding: "utf8",
    timeout: TURN_TIMEOUT_MS,
    maxBuffer: 64 * 1024 * 1024,
    shell: true,
  });
  if (run.error) throw run.error;
  const tools: string[] = [];
  let result: any = null;
  for (const line of (run.stdout ?? "").split("\n")) {
    if (!line.trim().startsWith("{")) continue;
    let event: any;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }
    for (const part of event?.message?.content ?? []) if (part?.type === "tool_use") tools.push(part.name);
    if (event.type === "result") result = event;
  }
  if (!result) {
    throw new Error(`Claude Code returned no result (exit ${run.status}).\n${(run.stderr ?? "").slice(0, 2000)}`);
  }
  return { text: String(result.result ?? ""), tools, isError: !!result.is_error, raw: result };
}

function stage(ws: Workspace, issue: number): string {
  const file = path.join(ws.env.QA_STATE_DIR!, `issue-${issue}.json`);
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")).stage : "none";
}

function approve(ws: Workspace, issue: number) {
  spawnSync("node", [APPROVE, String(issue)], { env: ws.env, input: "y\n", encoding: "utf8" });
}

function decisionsMessage(spec: EvalCase & { decisions?: string[] }): string {
  return (
    "Answers from the product owner:\n" +
    (spec.decisions ?? []).map((d) => `- ${d}`).join("\n") +
    "\nFor any question these do not cover, accept your suggested answer."
  );
}

async function runOnce(spec: EvalCase & { prompt?: string; decisions?: string[] }, label: string, n: number) {
  const ws = makeWorkspace(spec, `${spec.id}-${n}`);
  const sessionId = randomUUID();
  const transcript: string[] = [];
  const toolsUsed: string[] = [];
  let message = spec.prompt ?? `Write test cases for Excalidraw issue #${spec.issue}.`;
  let first = true;
  let outcome = "turn limit reached";

  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    transcript.push(`## Turn ${turn}: runner\n\n${message}\n`);
    const reply = claudeTurn(ws, sessionId, first, message);
    first = false;
    toolsUsed.push(...reply.tools);
    transcript.push(`## Turn ${turn}: agent (tools: ${reply.tools.join(", ") || "none"})\n\n${reply.text}\n`);
    if (reply.isError) {
      outcome = "agent error";
      break;
    }
    const s = stage(ws, spec.issue);
    if (s === "saved") {
      outcome = "saved";
      break;
    }
    if (s === "none" || s === "questions_open") message = decisionsMessage(spec);
    else if (s === "answers_waiting_approval") {
      approve(ws, spec.issue);
      message = "I approved the answers with the approve command. Continue.";
    } else if (s === "plan_waiting_approval") {
      approve(ws, spec.issue);
      message = "I approved the plan with the approve command. Continue.";
    } else message = "Continue with the workflow.";
  }

  // Keep the evidence of the run in the repository.
  const out = path.join(REPO, "evals", "runs", spec.id, `${label}-${n}`);
  mkdirSync(out, { recursive: true });
  writeFileSync(path.join(out, "transcript.md"), transcript.join("\n"));
  const changeSet = path.join(ws.env.QA_CHANGES_DIR!, `excalidraw-${spec.issue}.md`);
  const content = existsSync(changeSet) ? readFileSync(changeSet, "utf8") : "";
  if (content) writeFileSync(path.join(out, "change-set.md"), content);
  for (const f of [`state/issue-${spec.issue}.json`, "state/audit.log", "knowledge/proposals.json"]) {
    const src = path.join(ws.dir, f);
    if (existsSync(src)) cpSync(src, path.join(out, path.basename(f)));
  }

  const otherTools = [...new Set(toolsUsed.filter((t) => !t.startsWith("mcp__qa-agent") && t !== "Read" && t !== "Skill"))];
  const g = grade(spec, content, `${label} #${n}`, path.relative(REPO, path.join(out, "change-set.md")));
  g.checks.push({ group: "process", name: "workflow reached saved", pass: outcome === "saved", detail: outcome });
  g.checks.push({ group: "process", name: "only allowed tools used", pass: otherTools.length === 0, detail: otherTools.join(", ") || undefined });
  g.passed = g.checks.filter((c) => c.pass).length;
  g.total = g.checks.length;
  g.score = Math.round((g.passed / g.total) * 100) / 100;
  appendFileSync(
    path.join(REPO, "evals", "results.jsonl"),
    JSON.stringify({ at: new Date().toISOString(), ...g, checks: g.checks.filter((c) => !c.pass), tools: [...new Set(toolsUsed)] }) + "\n"
  );
  rmSync(ws.dir, { recursive: true, force: true });

  console.log(`  run ${n}: ${outcome}, ${g.passed}/${g.total} checks, score ${g.score}, ${g.metrics.cases} cases`);
  for (const c of g.checks.filter((x) => !x.pass)) console.log(`    FAIL [${c.group}] ${c.name}${c.detail ? `: ${c.detail}` : ""}`);
}

function doctor() {
  const ws = makeWorkspace(null, "doctor");
  const reply = claudeTurn(
    ws,
    randomUUID(),
    true,
    "Do not call any tool. List, as two short lists, the names of the skills and the tools available to you in this session."
  );
  console.log(reply.text);
  rmSync(ws.dir, { recursive: true, force: true });
}

const args = process.argv.slice(2);
const target = args[0];
if (!target) {
  console.log("Usage: npm run eval -- doctor | <case id> [--runs N] [--label text]");
  process.exit(1);
}
if (target === "doctor") doctor();
else {
  const i = (flag: string) => args.indexOf(flag);
  const runs = i("--runs") >= 0 ? Number(args[i("--runs") + 1]) : 1;
  const label = i("--label") >= 0 ? args[i("--label") + 1] : "run";
  const spec = await loadCase(target);
  // Continue the numbering of earlier runs with the same label, so no run overwrites another.
  let first = 1;
  while (existsSync(path.join(REPO, "evals", "runs", spec.id, `${label}-${first}`))) first++;
  console.log(`${spec.id}: ${spec.title}, ${runs} run(s), label "${label}", numbered from ${first}`);
  for (let n = first; n < first + runs; n++) await runOnce(spec, label, n);
}
