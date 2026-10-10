// Human approval command. Run it yourself in a terminal:
//   npm run approve -- 11404
// The model in the chat cannot run it, so an approval always comes from a person.
import { createInterface } from "node:readline/promises";
import { userInfo } from "node:os";
import { fingerprint, loadSession, saveSession } from "./sessions.js";

const issue = Number(process.argv[2]);
if (!Number.isInteger(issue) || issue <= 0) {
  console.log("Usage: npm run approve -- <issue number>");
  process.exit(1);
}

const session = await loadSession(issue);
if (!session) {
  console.log(`No session for issue ${issue}. The agent opens one with open_session.`);
  process.exit(1);
}

let what: "answers" | "plan";
if (session.stage === "answers_waiting_approval") what = "answers";
else if (session.stage === "plan_waiting_approval") what = "plan";
else {
  console.log(`Issue ${issue} is at stage "${session.stage}". Nothing is waiting for approval.`);
  process.exit(0);
}

const text = (what === "answers" ? session.answers : session.plan) ?? "";
console.log(`\nIssue ${issue}: the ${what} waiting for approval\n`);
console.log("-".repeat(60));
console.log(text);
console.log("-".repeat(60));

const rl = createInterface({ input: process.stdin, output: process.stdout });
const label = what === "answers" ? "these answers" : "this plan";
const reply = (await rl.question(`\nApprove ${label}? (y/n) `)).trim().toLowerCase();
rl.close();

if (reply !== "y") {
  console.log("Not approved. Tell the agent in the chat what to change.");
  process.exit(0);
}

const by = userInfo().username;
session.approvals.push({ what, hash: fingerprint(text), by, at: new Date().toISOString() });
session.stage = what === "answers" ? "answers_approved" : "plan_approved";
await saveSession(session, `${what} approved by ${by}`);
console.log(`Approved by ${by}. Stage: ${session.stage}. Go back to the chat.`);
