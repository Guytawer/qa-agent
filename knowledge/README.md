# Knowledge base

Reviewed facts about Excalidraw that the agent reads before analysing a ticket. One file per product area; every fact has its source and who accepted it.

- The agent proposes facts with `propose_knowledge`; they wait in `proposals.json`.
- A person reviews them with `npm run review-knowledge` (in `mcp-server`): y accepts, n rejects, s skips.
- Facts about a feature that is not released go to `pending/issue-<n>.md` and do not count as current behavior until the feature ships.
- Only stable facts belong here: labels, shortcuts, rules, team decisions. Not counts, assignees or other things that go stale.
