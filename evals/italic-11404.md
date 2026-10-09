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

## Backlog for v0.4
- Actions hidden in data rows ("press T, click, type, press Esc" in one row). Seen in runs 2 and 3.
- Color and opacity changes not covered and not listed. Seen in runs 2 and 3.
