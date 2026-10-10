# Changelog

## 0.7 — 2026-10-10
Based on runs 6 and 7 (Excalidraw #10506).

- conventions.md gets a case template; the skill uses it line for line. Runs 6 and 7 used different headers because nothing defined them.
- Recorded answers must stand on their own: "your suggestion" is expanded into the accepted text, each line marked "(user)" or "(accepted suggestion)". In run 6 the approved text did not contain what was approved.
- The merge rule is checked on the plan before `submit_plan`. In run 6 the reviewer had to reject a plan with two overlapping cases.
- New cases are numbered in the order they appear in the change set; the content does not repeat the server's status line.
- A saved workflow is not restarted silently: the skill reads it with the new `read_change_set` tool and asks. In run 7 it could not show the saved cases.
- Proposed facts say what a control does, not only what it shows; guesses marked (verify) are never proposed. In run 7 "the field shows the size" led to "an exact size cannot be typed".

## 0.6 — 2026-10-10
- Step 0: read the reviewed knowledge base before analysing; facts found there need no (verify) mark; pending knowledge is never current behavior.
- Step 6b: propose stable facts learned in the session (product-owner decisions, confirmed UI labels) for a person to review. Run 5 marked several labels (verify) that the team already knew.

## 0.5 — 2026-10-10
- Gated workflow: when the qa-agent server's session tools are available, the skill records questions, answers and the case plan through them. The server blocks each next step until the user approves with the `npm run approve` command, so the stop is enforced in code, not only asked for in this file.

## 0.4 — 2026-10-10
- New step 1b: when a search tool for existing cases is available (the qa-agent MCP server's `search_cases`), search per behavior and decide create, update or retire. Without the tool, say that existing cases were not checked.
- Case format gets an Action line; self-review checks that changed existing cases are updated, not duplicated.

## 0.3 — 2026-10-09
Based on run 2 (v0.2): 25 cases, all five run-1 defects fixed, one regression.

- Step 1 now lists the existing features the change touches. Run 2 dropped groups, library items, duplication and other style changes without saying so.
- Self-review checks that every touched feature is covered or listed under "Not covered".
- Split rule: an expected result that needs "or" or "if" across data rows means the case must be split. Run 2 merged text in shapes with arrow labels (TC-4).

## 0.2 — 2026-10-09
Based on run 1: Excalidraw issue #11404 (italic text), 41 cases.

- Coverage rules: merge cases that differ only in data, split only when the expected result differs, no loops inside a case, no full combinations, 15-30 cases for a small feature. Run 1 produced 41 cases with avoidable duplicates.
- New technique: text and locales. Run 1 covered right-to-left text only after the user asked.
- Product facts not backed by config or the requirement are marked (verify). Run 1 relied on unverified menu names and shortcuts.
- New step 5, self-review against the conventions. Run 1 broke "one action per step" and marked 20 of 41 cases High.
- The skill talks about the product, not about its own files.
- conventions.md: High stays a minority.

## 0.1 — 2026-10-08
First version: understand, ask, design coverage, write, summarize. Team rules in config/.
