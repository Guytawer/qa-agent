# Changelog

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
