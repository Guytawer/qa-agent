# Eval case 1: Excalidraw #11404, italic text

Input: issue text, then the PO decisions below. The decisions stay the same between runs; the question numbers may differ, so the reply is re-mapped each time.

PO decisions:
- Panel toggle and Ctrl/Cmd+I, one italic property per text element, no separate font.
- Whole element only. Bold out of scope.
- Synthetic oblique allowed; readable, unclipped, measured in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (RTL), emoji, mixed scripts; direction and alignment unchanged.
- Last italic value becomes the default for new text.

Expected at the question stage:
- Stops and asks before writing cases.
- First asks which of the three options ships.

## Results

| Check | Run 1 (v0.1) | Run 2 (v0.2) | Run 3 (v0.3) |
|---|---|---|---|
| Stops for questions | yes | yes | yes |
| Asks which option ships first | yes | yes | yes |
| Talks about its own files | yes | no | no |
| Raises RTL unprompted | no | yes | yes |
| Lists touched existing features | no | no | yes |
| Cases | 41 | 25 | 29 |
| High priority | 20 of 41 | 4 of 25 | 4 of 29 |
| Steps with several actions | several | few, hidden in data rows | few, hidden in data rows (TC-9, TC-23) |
| Loops inside a case | yes (every font) | no | no |
| Unverified product facts marked | no | yes | yes |
| Groups, library, duplicate, font and size changes | yes | lost silently | yes (TC-4, TC-13, TC-19) |
| Color and opacity changes keep italic | yes | lost silently | lost silently |
| Shape text and arrow label split | yes | merged (TC-4) | split (TC-17, TC-18) |
| Excluded features listed with reasons | partly | no | yes (locked text, zoom, dark mode) |

Note: one run per version. Differences may partly be run-to-run variance.

## Backlog
- Actions hidden in data rows ("press T, click, type, press Esc" in one row). Seen in runs 2 and 3.
- Color and opacity changes not covered and not listed. Seen in runs 2 and 3.
- search_cases: ignore words that appear in most cases ("text"), so noisy queries rank well.
- C-006-style growth: a case that checks a behavior in two directions should use a data table.

## Run 4 (v0.4, with the search_cases tool and 18 seed cases)

| Check | Result |
|---|---|
| Searched existing cases before writing | yes, 14 searches, mostly specific ("copy paste styles", "undo redo"); a few noisy ones with the word "text" |
| Existing cases updated instead of duplicated | 13 updated (C-001, C-002, C-005, C-006, C-009, C-011 to C-018), 14 new, 0 retired |
| Reviewer decisions applied | yes: arrow label new case without re-checking C-010; C-001 and C-002 updated |
| Cases | 27 |
| High priority | 6 of 27 |
| Loops inside a case | no |
| Unverified product facts marked | yes |
| Unchanged cases listed with reasons | yes, except C-004 (color) without a reason |
| Color change keeps italic | not covered and not listed (third run in a row) |
| New finding | C-006 grew to 16 steps and checks two directions; could be a data table |

Output saved as a pending change set: `changes/excalidraw-11404.md`, not applied to `cases/` because the feature is not released.
