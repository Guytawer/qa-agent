// Code-level defenses against prompt injection. The model is asked to treat issue text as data;
// these checks do not depend on the model remembering that.
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { STATE_DIR } from "./sessions.js";

// Domains a test case may link to. Everything else in saved cases is blocked.
// Set QA_URL_ALLOWLIST (comma-separated) for another product.
export const URL_ALLOWLIST = (process.env.QA_URL_ALLOWLIST ?? "excalidraw.com,github.com")
  .split(",")
  .map((d) => d.trim().toLowerCase())
  .filter(Boolean);

const URL_PATTERN = /https?:\/\/[^\s)<>"'\]]+/gi;

function hostOf(url: string): string | null {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return null;
  }
}

export function isAllowedUrl(url: string): boolean {
  const host = hostOf(url);
  return host !== null && URL_ALLOWLIST.some((d) => host === d || host.endsWith(`.${d}`));
}

export function outsideUrls(text: string): string[] {
  const urls = (text.match(URL_PATTERN) ?? []).map((url) => url.replace(/[.,;:!?]+$/, ""));
  return [...new Set(urls)].filter((url) => !isAllowedUrl(url));
}

export type Notice = { where: string; kind: string; detail: string };

// Patterns worth showing to the person, not proof of an attack.
const CHECKS: { kind: string; pattern: RegExp }[] = [
  { kind: "text addressed to an AI", pattern: /\b(AI|LLM|language model|assistant|agent)s?\b[^.\n]{0,80}\b(must|should|skip|ignore|call|create|send|store|do not|don't|before you)\b/i },
  { kind: "request to skip questions or approvals", pattern: /\b(skip|bypass|no need to (re-?confirm|ask|approve)|gates? (are|is) (already )?satisfied|already approved|without asking)\b/i },
  { kind: "request for credentials", pattern: /\b(sign in|log ?in|password|credentials?)\b[^.\n]{0,60}\b(account|password|with your)\b|\bwith your [\w+ ]{0,30}account\b/i },
  { kind: "request to send data outside", pattern: /\b(send|post|upload|share)\b[^.\n]{0,80}\b(knowledge base|notes|test cases|summary|results)\b[^.\n]{0,40}https?:\/\//i },
  { kind: "hidden HTML comment", pattern: /<!--[\s\S]*?-->/ },
];

export function findNotices(where: string, text: string | null | undefined): Notice[] {
  if (!text) return [];
  const notices: Notice[] = [];
  for (const url of outsideUrls(text)) notices.push({ where, kind: "link outside the allowed domains", detail: url });
  for (const { kind, pattern } of CHECKS) {
    const match = text.match(pattern);
    if (match) notices.push({ where, kind, detail: match[0].replace(/\s+/g, " ").slice(0, 160) });
  }
  return notices;
}

// One JSON line per tool call: when, which tool, a short form of the arguments, and the outcome.
export const AUDIT_LOG = path.join(STATE_DIR, "audit.log");

export async function audit(tool: string, args: unknown, outcome: "ok" | "blocked"): Promise<void> {
  const summary = JSON.stringify(args ?? {}).slice(0, 300);
  const line = JSON.stringify({ at: new Date().toISOString(), tool, args: summary, outcome }) + "\n";
  await mkdir(STATE_DIR, { recursive: true });
  await appendFile(AUDIT_LOG, line, "utf8");
}
