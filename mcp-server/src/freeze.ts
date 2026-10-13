// Freezes a GitHub issue as a local fixture, so eval runs read the same text every time.
//   npm run freeze -- 10506
// Writes fixtures/issue-<n>.json in the same shape get_issue returns. Run it on a machine with GitHub access.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_NAME = "excalidraw/excalidraw";
const FIXTURES = process.env.QA_FIXTURES_DIR ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../fixtures");
const number = Number(process.argv[2]);
if (!Number.isInteger(number) || number <= 0) {
  console.log("Usage: npm run freeze -- <issue number>");
  process.exit(1);
}
const headers = { "User-Agent": "qa-agent", Accept: "application/vnd.github+json" };
const base = `https://api.github.com/repos/${REPO_NAME}/issues/${number}`;
const issueResponse = await fetch(base, { headers });
if (!issueResponse.ok) {
  console.log(`GitHub returned ${issueResponse.status} for issue ${number}.`);
  process.exit(1);
}
const issue = await issueResponse.json();
const comments = await (await fetch(`${base}/comments`, { headers })).json();
const fixture = {
  number: issue.number,
  title: issue.title,
  state: issue.state,
  labels: issue.labels.map((l: { name: string }) => l.name),
  author: issue.user?.login,
  assignees: issue.assignees.map((a: { login: string }) => a.login),
  created_at: issue.created_at,
  body: issue.body,
  comments: comments.map((c: { user?: { login: string }; body: string }) => ({ author: c.user?.login, body: c.body })),
  frozen_at: new Date().toISOString(),
};
const target = path.join(FIXTURES, `issue-${number}.json`);
await writeFile(target, JSON.stringify(fixture, null, 2) + "\n", "utf8");
console.log(`Frozen: ${target} (${fixture.comments.length} comments). get_issue now returns this copy for #${number}.`);
