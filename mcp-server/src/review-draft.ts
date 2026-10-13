// Morning review of a draft from an autonomous run. Read-only.
//   npm run review-draft -- 11404
// Shows what a person must check first, in this order: what the server found in the issue, the agent's
// assumptions, the counts, and what the run tried to do. The cases themselves are in the draft file.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const issue = Number(process.argv[2]);
if (!issue) {
  console.log("Usage: npm run review-draft -- <issue>");
  process.exit(1);
}
const file = path.join(process.env.QA_DRAFTS_DIR ?? path.join(REPO, "drafts"), `excalidraw-${issue}.md`);
if (!existsSync(file)) {
  console.log(`No draft for issue ${issue}. Start one with: npm run auto -- ${issue}`);
  process.exit(1);
}
const draft = readFileSync(file, "utf8");

// The draft's own sections, by their headings (case headings are not sections).
const section = (title: string) => {
  const m = draft.match(new RegExp(`^## ${title}[^\\n]*\\n([\\s\\S]*?)(?=^## (?!(?:C|TC)-\\d)|$(?![\\s\\S]))`, "m"));
  return m ? m[1].trim() : "(missing)";
};
const status = draft.match(/^Status: .*$/m)?.[0] ?? "";
const counts = draft.match(/^Plan fingerprint .*$/m)?.[0] ?? "";
const cases = (draft.match(/^#{2,3}\s+(?:C|TC)-\d+/gm) ?? []).length;

// The newest kept run for this issue: state/auto/runs/<issue>-<time> or evals/autonomous/<issue>/<name>.
const runDirs = [
  ...(existsSync(path.join(REPO, "state", "auto", "runs"))
    ? readdirSync(path.join(REPO, "state", "auto", "runs")).filter((d) => d.startsWith(`${issue}-`)).map((d) => path.join(REPO, "state", "auto", "runs", d))
    : []),
  ...(existsSync(path.join(REPO, "evals", "autonomous", String(issue)))
    ? readdirSync(path.join(REPO, "evals", "autonomous", String(issue))).map((d) => path.join(REPO, "evals", "autonomous", String(issue), d))
    : []),
].filter((d) => existsSync(path.join(d, "calls.md")));
const latest = runDirs.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];

const line = "-".repeat(72);
console.log(`Draft for issue ${issue}: ${path.relative(REPO, file)}`);
console.log(status);
console.log(`${counts} (${cases} case headings in the file)`);
console.log(`\n${line}\n1. Found by the server in the issue (check these first)\n${line}\n${section("Notices found by the server")}`);
console.log(`\n${line}\n2. Assumptions the agent made without you (confirm or correct each one)\n${line}\n${section("Assumptions")}`);

console.log(`\n${line}\n3. What the run did\n${line}`);
if (latest) {
  const calls = readFileSync(path.join(latest, "calls.md"), "utf8");
  const names = [...calls.matchAll(/^- (\S+)/gm)].map((m) => m[1]);
  const other = [...new Set(names.filter((n) => !n.startsWith("mcp__qa-agent") && n !== "Read" && n !== "Skill"))];
  const errors = calls.split("\n").filter((l) => / -> ERROR /.test(l));
  const deniedPart = calls.split("Denied by Claude Code:")[1] ?? "";
  const denied = deniedPart.split("\n").filter((l) => l.startsWith("- ") && l !== "- none");
  const audit = existsSync(path.join(latest, "audit.log")) ? readFileSync(path.join(latest, "audit.log"), "utf8") : "";
  const blocked = audit.split("\n").filter((l) => l.includes('"outcome":"blocked"'));
  console.log(`Run: ${path.relative(REPO, latest)}`);
  console.log(`Tool calls: ${names.length}; tools outside the profile: ${other.join(", ") || "none"}`);
  console.log(`Denied by Claude Code: ${denied.length ? "\n  " + denied.join("\n  ") : "none"}`);
  console.log(`Blocked by the server: ${blocked.length ? "\n  " + blocked.map((l) => JSON.parse(l).tool).join("\n  ") : "none"}`);
  console.log(`Calls that returned an error: ${errors.length ? "\n  " + errors.join("\n  ") : "none"}`);
} else {
  console.log("No kept run found for this draft.");
}

console.log(`\n${line}\nNext\n${line}`);
console.log(
  "Read the cases in the draft file. To use them, open a normal session and ask for test cases for this issue:\n" +
    "the agent reads the draft, asks you to confirm or correct each assumption, and the usual approvals apply\n" +
    "(npm run approve). Nothing from the draft reaches changes/ or the knowledge base before that."
);
