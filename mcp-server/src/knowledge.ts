// Knowledge base: reviewed facts about the product, one markdown file per area.
// The agent only proposes facts; a person accepts them with `npm run review-knowledge`.
import { mkdir, readdir, readFile, writeFile, appendFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const KNOWLEDGE_DIR = process.env.QA_KNOWLEDGE_DIR ?? path.join(REPO_ROOT, "knowledge");
const PENDING_DIR = () => path.join(KNOWLEDGE_DIR, "pending");
const PROPOSALS = () => path.join(KNOWLEDGE_DIR, "proposals.json");

export type Proposal = {
  id: number;
  area: string; // file name without .md, for example "text-properties"
  fact: string;
  source: string; // where the fact comes from: PO answer, issue, checked in the product...
  issue?: number; // set for facts about a feature that is not released yet
  proposed_at: string;
};

export async function loadProposals(): Promise<Proposal[]> {
  try {
    return JSON.parse(await readFile(PROPOSALS(), "utf8")) as Proposal[];
  } catch {
    return [];
  }
}

export async function saveProposals(list: Proposal[]): Promise<void> {
  await mkdir(KNOWLEDGE_DIR, { recursive: true });
  await writeFile(PROPOSALS(), JSON.stringify(list, null, 2) + "\n", "utf8");
}

export async function addProposal(p: Omit<Proposal, "id" | "proposed_at">): Promise<Proposal> {
  const list = await loadProposals();
  const proposal: Proposal = { ...p, id: Math.max(0, ...list.map((x) => x.id)) + 1, proposed_at: new Date().toISOString() };
  list.push(proposal);
  await saveProposals(list);
  return proposal;
}

function title(area: string): string {
  return area.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());
}

// Writes an accepted fact: to the area file if the behavior exists today,
// or to pending/issue-<n>.md if it belongs to a feature that is not released.
export async function acceptProposal(p: Proposal, by: string): Promise<string> {
  const date = new Date().toISOString().slice(0, 10);
  const line = `- ${p.fact} (source: ${p.source}; accepted ${date} by ${by})\n`;
  if (p.issue) {
    await mkdir(PENDING_DIR(), { recursive: true });
    const file = path.join(PENDING_DIR(), `issue-${p.issue}.md`);
    const exists = await readFile(file, "utf8").catch(() => null);
    if (exists === null) {
      await writeFile(file, `# Pending knowledge: issue ${p.issue}\n\nNot in the product yet. Becomes current behavior when the issue ships.\n\n`, "utf8");
    }
    await appendFile(file, `- [${p.area}] ${line.slice(2)}`, "utf8");
    return file;
  }
  const file = path.join(KNOWLEDGE_DIR, `${p.area}.md`);
  const exists = await readFile(file, "utf8").catch(() => null);
  if (exists === null) await writeFile(file, `# ${title(p.area)}\n\n`, "utf8");
  await appendFile(file, line, "utf8");
  return file;
}

export async function listAreas(): Promise<{ area: string; facts: number }[]> {
  const files = await readdir(KNOWLEDGE_DIR).catch(() => [] as string[]);
  const areas = [];
  for (const f of files.filter((f) => f.endsWith(".md") && f !== "README.md")) {
    const text = await readFile(path.join(KNOWLEDGE_DIR, f), "utf8");
    areas.push({ area: f.replace(/\.md$/, ""), facts: text.split("\n").filter((l) => l.startsWith("- ")).length });
  }
  return areas;
}

export async function readArea(area: string): Promise<string | null> {
  return readFile(path.join(KNOWLEDGE_DIR, `${area}.md`), "utf8").catch(() => null);
}

export async function readPending(): Promise<string[]> {
  const files = await readdir(PENDING_DIR()).catch(() => [] as string[]);
  return Promise.all(files.filter((f) => f.endsWith(".md")).map((f) => readFile(path.join(PENDING_DIR(), f), "utf8")));
}
