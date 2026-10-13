## Turn 1: runner

Write test cases for Excalidraw issue #11404.

## Turn 1: agent (tools: Skill, Read, Read, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I started the test case workflow for issue #11404, "Add support for italic text". It's an open feature request with no spec: the author suggests an italic toggle in the panel, the Ctrl+I / Cmd+I shortcut, or a font with an italic style. The two comments are only offers to work on it. I found nothing suspicious in the issue.

**Notes:**
- The product profile isn't set up yet, so I'm working from the team's reviewed product facts and existing cases.
- These existing cases will probably need italic added to them:
  - **Text properties:** C-001, C-005 and C-006
  - **Text in shapes and on arrows:** C-007, C-009 and C-010
  - **Styles, copies and history:** C-011, C-012 and C-013
  - **Files, sharing and export:** C-014 to C-018

**Questions (each has a suggested answer):**

1. **Which option ships?** Suggested: an "Italic" toggle next to the text align control (tooltip "Italic (Ctrl+I)") plus the Ctrl+I / Cmd+I shortcut. No separate italic font.
2. **What can be italic?** Suggested: the whole text element only, with no partial italic.
3. **What does Ctrl+I / Cmd+I do in each situation?** Suggested:
   - It toggles italic on the selected text, or on the text being edited even when only part of it is highlighted.
   - With nothing selected, it does nothing.
   - The browser's own Ctrl+I action never opens while the canvas has focus.
4. **When is the toggle shown?** Suggested: when a text, a shape with text, an arrow label or a sticky note is selected, or when the Text tool is active.
5. **What about fonts that have no italic style?** These may include the hand-drawn font, Code and the fallback fonts for Chinese, Japanese and Korean (CJK) text. Suggested: every font can be italic, and those without a true italic get a computer-made slant.
6. **How does the toggle behave when several texts are selected and only some are italic?** Suggested: it shows as not pressed. One click makes all of them italic, and a second click removes italic from all.
7. **What do new texts use?** Suggested: the last chosen italic value becomes the default for new text.
8. **How does italic affect layout?** Suggested:
   - The selection box fits the italic text.
   - No slanted character is cut off on the canvas or in exports.
   - Text inside a shape re-wraps to the shape's width and the shape grows taller when needed.
   - An arrow label stays at the middle of the arrow.
   - A sticky note's automatic text fitting takes italic into account.
9. **Where must italic be kept?** Suggested:
   - It survives a page reload, a saved .excalidraw file, PNG and SVG export, copy as PNG/SVG, and live collaboration.
   - An older Excalidraw version opens the file without error and shows the text upright.
10. **Styles and history:** Suggested: copy and paste styles, Ctrl+C then Ctrl+V, Ctrl+D, Alt+drag and library items keep italic. One toggle is undone with a single undo.
11. **How do other scripts look in italic?** Suggested: right-to-left text, Chinese, Japanese and Korean text, and emoji render slanted, or the way the browser draws them, with nothing cut off or overlapping. Emoji may stay upright.
12. **Should italic be tested together with underline (#99001) and line height (#99002)?** Neither is released yet. Suggested: no, cover the combinations only after they ship.
13. **Which platforms are in scope?** Suggested:
    - Current desktop Chrome, Firefox, Safari and Edge on Windows and macOS
    - The mobile layout, where the toggle fits a 375 px wide properties panel

Please answer each question, or reply "accept suggestions" (you can change any of them). I'll wait for your answers before planning the cases.

## Turn 2: runner

Answers from the product owner:
- A panel toggle and Ctrl/Cmd+I; one italic property per text element, no separate font.
- Whole element only. Bold is out of scope.
- Synthetic oblique is allowed; text stays readable and unclipped in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (right to left), emoji and mixed scripts; direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Color and opacity changes keep italic.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I recorded the product owner's answers for issue #11404. Where they didn't cover a question, I filled in my suggested answer and marked it "(accepted suggestion)". Their answers are marked "(user)". The recorded text spells out every answer in full, so it can be approved as it stands.

Points from the product owner:
- Italic is a panel toggle plus Ctrl+I / Cmd+I, set on the whole text element, with no separate italic font. Bold is out of scope.
- A computer-made (synthetic) slant is allowed. Text must stay readable and not cut off in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji and mixed scripts, with direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Changing color or opacity keeps italic.

Please approve the answers by running this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me once it's done, and I'll submit the plan of new and updated cases for your approval.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan)

I submitted the case plan for issue #11404. The server counts 25 cases: 16 new, 9 updated, none retired.

**Text properties**
- create TC-1: "Italic" toggle, turning italic on and off for a text element
- create TC-2: Ctrl+I / Cmd+I on a selected text
- create TC-3: Ctrl+I while editing a text with part of it highlighted
- create TC-4: Ctrl+I with nothing selected
- create TC-5: "Italic" toggle, where it is shown
- create TC-6: Italic in different fonts and after a font family change
- create TC-7: Italic text in different scripts
- create TC-8: Italic on multi-line text with each text alignment
- create TC-9: Several texts with mixed italic, the toggle state and one click for all
- update C-006: add italic to the last chosen style, so new text is created italic
- create TC-10: Italic kept after color and opacity changes
- create TC-11: "Italic" toggle in the mobile layout

**Text in shapes and on arrows**
- create TC-12: Italic on text inside a shape
- create TC-13: Italic on an arrow label
- create TC-14: Italic on a sticky note label

**Styles, copies and history**
- update C-011: "Source" is also italic; after paste styles "Target" is italic
- update C-012: add a table with two rows, the existing font size change and an italic toggle; each is undone with one undo
- update C-013: "Hypothesis H1" is also italic, and every copy is italic

**Files, sharing and export**
- update C-014: the text is also italic and stays italic after a reload
- update C-015: the text is also italic and is still italic after reopening the saved file
- update C-016: the canvas also holds an italic text, which the PNG shows italic and not cut off
- update C-017: one of the texts is italic, and the SVG on the second computer shows it italic
- update C-018: add a table with two rows, the existing color change and an italic toggle; both reach user B
- create TC-15: Copy as PNG and copy as SVG keep italic
- create TC-16: An older Excalidraw version opens a file with italic text

**Not changed:** C-001, C-002, C-003, C-004, C-005, C-007, C-008, C-009, C-010

**Coverage of current behavior:** none of the updates removes a check of current behavior. C-012 and C-018 keep their existing checks (the font size change and the color change) as one row of their new tables.

Please approve the plan by running this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me once it's done, and I'll write and save the cases.

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I wrote and saved the test cases for issue #11404 (italic text) to `changes\excalidraw-11404.md`. The server counts 25 cases: 16 new, 9 updated, none retired. This completes the workflow for the issue.

**What the cases cover**

| Behavior | Cases |
|---|---|
| "Italic" toggle: on, off, tooltip | TC-1 |
| Ctrl+I / Cmd+I: on a selected text, while editing with part of the text highlighted, with nothing selected | TC-2, TC-3, TC-4 |
| Where the toggle is shown | TC-5 |
| Different fonts and switching font | TC-6 |
| Different scripts: Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji, mixed | TC-7 |
| Text alignment | TC-8 |
| Several selected texts, only some italic | TC-9 |
| Default for new text | C-006 |
| Italic kept after color and opacity changes | TC-10 |
| Mobile layout at 375 px | TC-11 |
| Text in a shape, arrow label, sticky note | TC-12, TC-13, TC-14 |
| Copy and paste styles, undo and redo, copies | C-011, C-012, C-013 |
| Page reload, saved file, PNG and SVG export, live collaboration | C-014 to C-018 |
| Copy as PNG/SVG | TC-15 |
| Older Excalidraw version opening a file with italic text | TC-16 |

No existing check was removed. C-012 and C-018 keep their current checks as one row of their new tables.

**Not covered**
- Italic together with underline (#99001) and line height (#99002), because neither is released yet.
- Bold, which the product owner put out of scope.

**Assumptions to check before running**
- In TC-5, a rectangle with no text does not show the "Italic" toggle. This is marked (verify).
- These product details aren't confirmed, so they are marked (verify) in the cases:
  - the "Opacity" slider label
  - the "Copy to clipboard as PNG/SVG" menu items
  - the "Lilita One" font
  - the button that opens the properties panel in the mobile layout
  - how to run an older Excalidraw build

**Product details still missing:** the product profile isn't set up yet, so I relied on the team's reviewed product facts and the existing cases.

I also proposed 7 facts from this session for the team's product facts. They are marked as belonging to an unreleased feature until #11404 ships. To review them, run this in a terminal, in the qa-agent folder:

```
npm run review-knowledge
```
