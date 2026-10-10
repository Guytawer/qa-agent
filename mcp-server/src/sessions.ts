// Workflow state for one ticket, stored as a JSON file in the state folder.
// The server and the approve command both use this module.
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const STATE_DIR = process.env.QA_STATE_DIR ?? path.join(REPO_ROOT, "state");
export const CHANGES_DIR = process.env.QA_CHANGES_DIR ?? path.join(REPO_ROOT, "changes");

export type Stage =
  | "questions_open" // questions written, waiting for the human's answers
  | "answers_waiting_approval" // answers recorded, the human must confirm them
  | "answers_approved" // the agent may submit a plan
  | "plan_waiting_approval" // plan submitted, the human must approve it
  | "plan_approved" // the agent may save the cases
  | "saved"; // cases saved to changes/

export type Approval = { what: "answers" | "plan"; hash: string; by: string; at: string };

export type Session = {
  issue: number;
  stage: Stage;
  questions: string;
  answers: string | null;
  plan: string | null;
  approvals: Approval[];
  history: { at: string; event: string }[];
};

export function fingerprint(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, 12);
}

function file(issue: number): string {
  return path.join(STATE_DIR, `issue-${issue}.json`);
}

export async function loadSession(issue: number): Promise<Session | null> {
  try {
    return JSON.parse(await readFile(file(issue), "utf8")) as Session;
  } catch {
    return null;
  }
}

export async function saveSession(session: Session, event: string): Promise<void> {
  session.history.push({ at: new Date().toISOString(), event });
  await mkdir(STATE_DIR, { recursive: true });
  await writeFile(file(session.issue), JSON.stringify(session, null, 2), "utf8");
}

// The approval that currently counts for answers or the plan: the latest one,
// and only if the text has not changed since it was given.
export function validApproval(session: Session, what: "answers" | "plan"): Approval | null {
  const text = what === "answers" ? session.answers : session.plan;
  if (text === null) return null;
  const latest = [...session.approvals].reverse().find((a) => a.what === what);
  return latest && latest.hash === fingerprint(text) ? latest : null;
}
