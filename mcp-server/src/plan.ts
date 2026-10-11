// The case plan has a strict line format, so completeness and counts are computed by code, not by the model.
//
// Allowed lines:
//   - update C-011: <what changes>      an existing case is changed
//   - retire C-004: <why>               an existing case is removed
//   - create TC-3: <title>              a new case
//   - keep TC-1: <title>                a case already in the saved change set, carried over unchanged
//   Not changed: C-003, C-005           existing cases deliberately left out (ids not required)
//   headings (# ..., **...**) and prose lines without case ids
// Any other line that names a case id is an error: the code could not tell whether that case must be saved.

export type Action = "update" | "create" | "retire" | "keep";
export type PlanEntry = { action: Action; id: string; line: number };

const ID = /\b(?:C|TC)-\d+\b/g;
const ACTION_LINE = /^(update|create|retire|keep)\s+((?:C|TC)-\d+)\b/i;
const NOT_CHANGED_LINE = /^(not changed|unchanged|left unchanged)\b/i;
const RANGE = /\b(?:C|TC)-\d+\s*(?:to|-|–|\.\.)\s*(?:C|TC)-\d+\b/i;

export function parsePlan(plan: string): { entries: PlanEntry[]; errors: string[] } {
  const entries: PlanEntry[] = [];
  const errors: string[] = [];
  const seen = new Set<string>();

  plan.split("\n").forEach((raw, index) => {
    const line = raw.trim().replace(/^[-*]\s+/, "");
    const n = index + 1;
    if (line === "" || NOT_CHANGED_LINE.test(line)) return;
    const ids = line.match(ID) ?? [];
    const action = line.match(ACTION_LINE);
    if (action) {
      if (RANGE.test(line)) {
        errors.push(`Line ${n} names a range of cases ("${line.slice(0, 60)}"). List each case on its own line.`);
        return;
      }
      const id = action[2].toUpperCase();
      if (seen.has(id)) errors.push(`Line ${n}: ${id} appears twice in the plan.`);
      seen.add(id);
      entries.push({ action: action[1].toLowerCase() as Action, id, line: n });
      return;
    }
    if (ids.length > 0) {
      errors.push(
        `Line ${n} names ${[...new Set(ids)].join(", ")} but is not an update, create, retire or keep line, nor a "Not changed:" line: "${line.slice(0, 80)}".`
      );
    }
  });

  if (entries.length === 0) errors.push("The plan has no update, create, retire or keep lines.");
  return { entries, errors };
}

export function countActions(entries: PlanEntry[]): Record<Action, number> {
  const counts: Record<Action, number> = { update: 0, create: 0, retire: 0, keep: 0 };
  for (const e of entries) counts[e.action]++;
  return counts;
}

export function describeCounts(entries: PlanEntry[]): string {
  const c = countActions(entries);
  return `${entries.length} cases: ${c.update} updated, ${c.create} new, ${c.retire} retired, ${c.keep} kept unchanged`;
}

// Case headings in saved content: "## C-011 ..." or "## TC-3 ...".
export function caseHeadings(content: string): string[] {
  return [...content.matchAll(/^#{2,3}\s+((?:C|TC)-\d+)\b/gm)].map((m) => m[1].toUpperCase());
}
