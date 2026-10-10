// Human review of proposed facts. Run it yourself in a terminal:
//   npm run review-knowledge
// For each proposal: y = accept, n = reject, s = skip for now.
import { createInterface } from "node:readline";
import { userInfo } from "node:os";
import { acceptProposal, loadProposals, saveProposals } from "./knowledge.js";

let proposals;
try {
  proposals = await loadProposals();
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}
if (proposals.length === 0) {
  console.log("No proposed facts waiting for review.");
  process.exit(0);
}

const by = userInfo().username;
const rl = createInterface({ input: process.stdin });
// Read answers line by line, so it works both when typing and when answers are piped in.
const lines = rl[Symbol.asyncIterator]();
async function ask(question: string): Promise<string> {
  process.stdout.write(question);
  const next = await lines.next();
  return next.done ? "s" : next.value;
}
const kept = [];
let accepted = 0;
let rejected = 0;

console.log(`${proposals.length} proposed facts. For each: y = accept, n = reject, s = skip.\n`);
for (const p of proposals) {
  console.log("-".repeat(60));
  console.log(`#${p.id}  area: ${p.area}${p.issue ? `  (pending: issue ${p.issue}, not released)` : ""}`);
  console.log(`Fact:   ${p.fact}`);
  console.log(`Source: ${p.source}`);
  const reply = (await ask("Accept? (y/n/s) ")).trim().toLowerCase();
  if (reply === "y") {
    const file = await acceptProposal(p, by);
    console.log(`  accepted -> ${file}`);
    accepted++;
  } else if (reply === "n") {
    console.log("  rejected");
    rejected++;
  } else {
    kept.push(p);
    console.log("  skipped, stays in the queue");
  }
}
rl.close();
await saveProposals(kept);
console.log(`\nAccepted ${accepted}, rejected ${rejected}, still waiting ${kept.length}.`);
if (accepted > 0) console.log("Commit the knowledge/ folder so the reviewed facts are kept in the history.");
