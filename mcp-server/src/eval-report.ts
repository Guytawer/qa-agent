// Summarises evals/results.jsonl: per case and label, the number of runs, mean score, spread and
// how often each check failed.
//   npm run eval-report
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
type Row = { case: string; label: string; score: number; metrics: { cases: number }; checks: { name: string }[] };

const rows: Row[] = readFileSync(path.join(REPO, "evals", "results.jsonl"), "utf8")
  .split("\n")
  .filter((l) => l.trim())
  .map((l) => JSON.parse(l));

// "v0.9 #2" and "v0.9 #3" belong to the same group "v0.9".
const groupOf = (r: Row) => `${r.case} | ${r.label.replace(/\s+#\d+$/, "")}`;
const groups = new Map<string, Row[]>();
for (const r of rows) groups.set(groupOf(r), [...(groups.get(groupOf(r)) ?? []), r]);

console.log("case | label | runs | mean score | min-max | cases (min-max) | checks that failed (times)");
for (const [key, list] of groups) {
  const scores = list.map((r) => r.score);
  const cases = list.map((r) => r.metrics.cases);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
  const fails = new Map<string, number>();
  for (const r of list) for (const c of r.checks) fails.set(c.name, (fails.get(c.name) ?? 0) + 1);
  const failText = [...fails].map(([name, n]) => `${name} (${n})`).join("; ") || "none";
  console.log(
    `${key} | ${list.length} | ${mean.toFixed(2)} | ${Math.min(...scores)}-${Math.max(...scores)} | ${Math.min(...cases)}-${Math.max(...cases)} | ${failText}`
  );
}
