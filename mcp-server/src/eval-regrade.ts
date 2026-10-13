// Regrades every row of evals/results.jsonl with the current grader and suite, after a check changed.
//   npm run regrade -- "why the checks changed"
// Each row is graded again from the change set it names (a file in evals/runs, or "git show <commit>:<path>").
// Rows keep their time, label, tools and process checks; the reason is appended to the row's note.
// A row whose file no longer holds its own change set (note says "overwritten") keeps its old result,
// with discovery unknown.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { grade, loadCase, type Check } from "./grade.js";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const RESULTS = path.join(REPO, "evals", "results.jsonl");
const reason = process.argv.slice(2).join(" ").trim();
if (!reason) {
  console.log('Usage: npm run regrade -- "why the checks changed"');
  process.exit(1);
}

function contentOf(file: string): string | null {
  const git = file.match(/^git show (\w+):(.+)$/);
  if (git) return execSync(`git show ${git[1]}:${git[2]}`, { cwd: REPO, encoding: "utf8" });
  const local = path.join(REPO, ...file.split(/[\\/]/));
  return existsSync(local) ? readFileSync(local, "utf8") : null;
}

const today = new Date().toISOString().slice(0, 10);
const rows = readFileSync(RESULTS, "utf8").split("\n").filter((l) => l.trim()).map((l) => JSON.parse(l));
const out: string[] = [];

for (const row of rows) {
  const spec = await loadCase(row.case);
  const oldFailed: Check[] = row.checks;
  const content = /overwritten/.test(row.note ?? "") ? null : contentOf(row.file);
  let next: any;

  if (content !== null) {
    const g = grade(spec, content, row.label, row.file);
    // Process checks exist only for runs made by the runner; they cannot be recomputed from the file.
    if (row.tools) {
      for (const name of ["workflow reached saved", "only allowed tools used"]) {
        const old = oldFailed.find((c) => c.name === name);
        g.checks.push({ group: "process", name, pass: !old, detail: old?.detail });
      }
    }
    g.passed = g.checks.filter((c) => c.pass).length;
    g.total = g.checks.length;
    g.score = Math.round((g.passed / g.total) * 100) / 100;
    next = { ...row, ...g, checks: g.checks.filter((c) => !c.pass), metrics: g.metrics };
  } else {
    // Without the file, checks added since the row was graded cannot be evaluated: keep the old result
    // and leave discovery unknown (null), so the report does not count it.
    next = { ...row, metrics: { ...row.metrics, discovery: null } };
  }

  next.note = [row.note, `regraded ${today}: ${reason}${content === null ? " (not regraded: file not available)" : ""}`]
    .filter(Boolean)
    .join("; ");
  if (next.score !== row.score) console.log(`  ${row.case} ${row.label}: score ${row.score} -> ${next.score}`);
  const d = next.metrics.discovery;
  console.log(`  ${row.case} ${row.label}: discovery ${d ? `${d.found}/${d.total}` : "unknown"}`);
  // Keep the field order of the runner's rows: time first, tools last.
  const { tools, note, ...rest } = next;
  out.push(JSON.stringify({ ...rest, ...(note ? { note } : {}), ...(tools ? { tools } : {}) }));
}

writeFileSync(RESULTS, out.join("\n") + "\n");
console.log(`\n${rows.length} rows regraded in evals/results.jsonl`);
