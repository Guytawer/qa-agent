// Summarises evals/results.jsonl per case and label: the number of runs, the score, the spread, and two
// numbers that mean different things:
//   required   checks the agent was told about (issue, decisions, shape, forbidden content, process);
//              a miss means it did not do what it was asked;
//   discovery  touched features nobody mentioned; a miss means its own analysis did not reach them.
//   npm run eval-report
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
type Row = {
  case: string;
  label: string;
  score: number;
  total: number;
  metrics: { cases: number; discovery?: { found: number; total: number } };
  checks: { group: string; name: string }[];
};

const rows: Row[] = readFileSync(path.join(REPO, "evals", "results.jsonl"), "utf8")
  .split("\n")
  .filter((l) => l.trim())
  .map((l) => JSON.parse(l));

// "v0.9 #2" and "v0.9 #3" belong to the same group "v0.9".
const groupOf = (r: Row) => `${r.case} | ${r.label.replace(/\s+#\d+$/, "")}`;
const groups = new Map<string, Row[]>();
for (const r of rows) groups.set(groupOf(r), [...(groups.get(groupOf(r)) ?? []), r]);

const pct = (a: number, b: number) => (b === 0 ? "-" : `${Math.round((a / b) * 100)}%`);

console.log("case | label | runs | mean score | min-max | cases (min-max) | required kept | discovery found | checks that failed (times)");
for (const [key, list] of groups) {
  const scores = list.map((r) => r.score);
  const cases = list.map((r) => r.metrics.cases);
  const mean = scores.reduce((a, b) => a + b, 0) / scores.length;

  let reqTotal = 0, reqFailed = 0, discTotal = 0, discFound = 0;
  for (const r of list) {
    const d = r.metrics.discovery ?? { found: 0, total: 0 };
    discTotal += d.total;
    discFound += d.found;
    reqTotal += r.total - d.total;
    reqFailed += r.checks.filter((c) => c.group !== "discovery").length;
  }
  const perRun = list.map((r) => r.metrics.discovery).filter((d) => d && d.total > 0).map((d) => `${d!.found}/${d!.total}`);
  const discText = discTotal === 0 ? "- (no checks)" : `${pct(discFound, discTotal)} (${perRun.join(", ")})`;

  const fails = new Map<string, number>();
  for (const r of list) for (const c of r.checks) fails.set(`[${c.group}] ${c.name}`, (fails.get(`[${c.group}] ${c.name}`) ?? 0) + 1);
  const failText = [...fails].map(([name, n]) => `${name} (${n})`).join("; ") || "none";

  console.log(
    `${key} | ${list.length} | ${mean.toFixed(2)} | ${Math.min(...scores)}-${Math.max(...scores)} | ${Math.min(...cases)}-${Math.max(...cases)} | ${pct(reqTotal - reqFailed, reqTotal)} | ${discText} | ${failText}`
  );
}
