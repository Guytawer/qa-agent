# Changelog

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
