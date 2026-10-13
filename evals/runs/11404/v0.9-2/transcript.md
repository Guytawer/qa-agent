## Turn 1: runner

Write test cases for Excalidraw issue #11404.

## Turn 1: agent (tools: Skill, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, Read, Read, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I've read issue #11404 ("Add support for italic text"). The server found nothing suspicious in it. Two comments are from people offering to build it. One mentions a commit, but I treated it as background only and didn't open it.

**What the issue asks for:** a way to make text italic in Excalidraw, for academic figures, flowcharts and emphasis. The author suggests any of three options: an "Italic" toggle in the text style panel, a Ctrl+I / Cmd+I shortcut, or a font that has an italic style. The issue doesn't say which option to build or how italic should behave.

**Existing cases this change touches:** C-001 (font family), C-005 (several texts selected), C-006 (style for new text), C-007 and C-009 (text in shapes), C-011, C-012 and C-013 (copy/paste styles, undo/redo, copies), C-014 and C-015 (reload, saved file), C-016 and C-017 (PNG/SVG export) and C-018 (live collaboration). No existing case covers italic.

**Setup gap:** the product profile (areas, roles, platforms, glossary) is still an empty template. I'm using the knowledge base and the area names from the existing cases instead.

## Open questions

1. **Which of the three options ships?**
   *Suggested:* an "Italic" toggle in the properties panel plus Ctrl+I (Cmd+I on macOS). No separate italic font in the font list.
2. **Whole text or part of it?**
   *Suggested:* italic applies to the whole text element, like font family. You can't make only some words italic.
3. **Where the control appears and its label.**
   *Suggested:* an "Italic" toggle next to text align, with the tooltip "Italic (Ctrl+I)". It shows when a text, a shape with text, an arrow with a label or a sticky note is selected, or when the Text tool is active.
4. **How Ctrl+I / Cmd+I behaves.**
   *Suggested:*
   - It toggles italic on the selected text and on text being edited, even if only part of that text is highlighted.
   - With nothing selected it does nothing.
   - The browser's own Ctrl+I action (for example Firefox "Page Info") never opens while the canvas has focus.
   - The existing single-key "I" tool shortcut doesn't fire.
5. **Several texts selected, only some italic.**
   *Suggested:* the toggle shows as off. One click makes all of them italic; a second click makes all of them upright.
6. **Default for new text.**
   *Suggested:* new text uses the last italic setting chosen, just as it does for font family and size today.
7. **Fonts that have no real italic version** (Hand-drawn/Excalifont, Code/Comic Shanns, others in the list).
   *Suggested:* every font can be made italic. Fonts without an italic version are shown slanted instead. The canvas, the text editor and exports all look the same.
8. **Effects on layout.**
   *Suggested:*
   - The selection box fits the slanted text, and the end of the last letter is never cut off.
   - Text inside a shape re-wraps; the shape grows taller if needed and keeps its width.
   - An arrow label stays at the middle of the arrow.
   - A sticky note's auto-fit takes italic into account and never shows the label larger than the chosen size.
   - Text doesn't jump when editing starts or ends.
9. **Other scripts.**
   *Suggested:* italic works for Latin, Cyrillic, CJK, right-to-left text and emoji, with no cut-off characters and no crashes.
10. **Saving, export and collaboration.**
    *Suggested:* italic is kept after a page reload, in a saved .excalidraw file, in PNG/SVG export, in copy as PNG/SVG and in live collaboration. An older Excalidraw version opens such a file without error and shows the text upright.
11. **Copies, styles and undo.**
    *Suggested:* copy/paste styles, Ctrl+C then Ctrl+V, Ctrl+D, Alt+drag and library items all keep italic. One undo reverts one italic toggle, and redo puts it back.
12. **Platforms.**
    *Suggested:* the latest Chrome, Firefox and Safari on Windows and macOS desktops. The toggle also fits a 375 px wide mobile properties panel without overlapping.

You can answer each question, or say "accept all suggestions" and correct any you disagree with. I'll wait for your answers before planning the cases.

## Turn 2: runner

Answers from the product owner:
- A panel toggle and Ctrl/Cmd+I; one italic property per text element, no separate font.
- Whole element only. Bold is out of scope.
- Synthetic oblique is allowed; text stays readable and unclipped in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (right to left), emoji and mixed scripts; direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Color and opacity changes keep italic.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I've recorded the product owner's answers for issue #11404. Where they didn't cover a question, I used my suggested answer, and each line is marked "(user)" or "(accepted suggestion)":

1. **Scope:** a panel toggle and Ctrl/Cmd+I, with one italic property per text element and no separate font. (user)
2. **Whole text or part of it:** whole element only. Bold is out of scope. (user)
3. **Control and label:** an "Italic" toggle next to text align, with the tooltip "Italic (Ctrl+I)". It shows when a text, a shape with text, an arrow with a label or a sticky note is selected, or when the Text tool is active. (accepted suggestion)
4. **Ctrl+I / Cmd+I:**
   - It toggles italic on the selected text and on text being edited, even if only part of that text is highlighted.
   - With nothing selected it does nothing.
   - The browser's own Ctrl+I action never opens while the canvas has focus.
   - The single-key "I" tool shortcut doesn't fire.

   (accepted suggestion)
5. **Several texts, only some italic:** the toggle shows as off. One click makes all of them italic; a second click makes all of them upright. (accepted suggestion)
6. **Default for new text:** the last italic value becomes the default. (user)
7. **Fonts without an italic version:** they may be shown slanted instead (user). Every font can be made italic, and the canvas, the text editor and exports look the same (accepted suggestion).
8. **Effects on layout:**
   - The selection box fits the slanted text, and the end of the last letter is never cut off.
   - Text inside a shape re-wraps; the shape grows taller if needed and keeps its width.
   - An arrow label stays at the middle of the arrow.
   - A sticky note's auto-fit takes italic into account.
   - Text doesn't jump when editing starts or ends.

   (accepted suggestion)
9. **Scripts:** text stays readable and nothing is cut off in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji and mixed scripts. Direction and alignment don't change. (user)
10. **Saving, export and collaboration:** italic is kept after a page reload, in a saved .excalidraw file, in PNG/SVG export, in copy as PNG/SVG and in live collaboration. An older Excalidraw version opens such a file without error and shows the text upright. (accepted suggestion)
11. **Copies, styles and undo:** copy/paste styles, Ctrl+C then Ctrl+V, Ctrl+D, Alt+drag and library items keep italic, and one undo or redo covers one italic toggle (accepted suggestion). Changing color or opacity keeps italic (user).
12. **Platforms:** the latest Chrome, Firefox and Safari on Windows and macOS desktops. The toggle fits a 375 px wide mobile properties panel. (accepted suggestion)

The answers count only after you approve them. Run this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me when it's done, and I'll send you the case plan to approve.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__get_session, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan)

The plan for issue #11404 has 24 cases: 11 updated, 13 new and none retired (counts from the server).

**Text properties**
- **update C-001:** the text starts italic, and the case also checks it stays italic after a font family change.
- **update C-004:** the text starts italic, and I add an opacity step. The case checks it stays italic after the color change and after the opacity change. Its title becomes "Text color and opacity: changing them on text".
- **update C-006:** I add a step that clicks "Italic" on "First". The case checks that "Second" is created italic.
- **create TC-1:** making a selected text italic with the "Italic" toggle or Ctrl+I / Cmd+I, then upright again. It also checks that the toggle shows the right state, no browser action opens and the tool doesn't change.
- **create TC-2:** Ctrl+I while editing a text with part of it highlighted. The whole text becomes italic, the editor shows it italic, and the text doesn't jump when editing ends.
- **create TC-3:** Ctrl+I with nothing selected. Nothing changes, the browser's "Page Info" doesn't open and the "I" tool shortcut doesn't fire.
- **create TC-4:** where the "Italic" toggle appears and its tooltip. Covers a text, a shape with text, an arrow label, a sticky note, the Text tool, a shape without text and nothing selected.
- **create TC-5:** several texts where only some are italic: what the toggle shows, and one click applying to all.
- **create TC-6:** italic in a sample of fonts: slanted, nothing cut off, selection box fits.
- **create TC-7:** italic in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji and mixed text: readable, nothing cut off, direction and alignment unchanged.
- **create TC-8:** the "Italic" toggle in the 375 px mobile layout.

**Text in shapes and on arrows**
- **create TC-9:** italic text inside a shape re-wraps; the shape grows taller and keeps its width.
- **create TC-10:** an italic arrow label stays at the middle of the arrow and fully visible.
- **create TC-11:** an italic sticky note label still auto-fits and is never shown larger than the chosen size.

**Styles, copies and history**
- **update C-011:** paste styles also makes the target text italic.
- **update C-012:** I add steps that turn on italic, undo and redo. One undo removes italic and keeps the size; redo puts italic back.
- **update C-013:** each copy of an italic original is italic.

**Files, sharing and export**
- **update C-014 and C-015:** the text stays italic after a page reload, and after saving and reopening the file.
- **update C-016:** an italic text appears italic in the PNG export.
- **update C-017:** an italic text in the hand-drawn font appears italic in the SVG on another computer.
- **update C-018:** I add a step where user A clicks "Italic", and the case checks that user B sees it without reloading.
- **create TC-12:** copying to the clipboard as PNG and as SVG keeps italic.
- **create TC-13:** an Excalidraw version without italic support opens a file with italic text without error and shows it upright.

**Not changed:** C-002, C-003, C-005, C-007, C-008, C-009, C-010.
**Out of scope:** bold, and italic for only part of a text.

**Warning on updates:** none of the updates removes a check of current behavior. Each one adds italic on top of what the case already checks. The only other change is the new title for C-004.

To approve the plan, run this in a terminal, in the qa-agent folder:

```
npm run approve -- 11404
```

Tell me when it's done, and I'll write and save the cases.

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I've written and saved the test cases for issue #11404: 24 cases, of which 11 update existing cases, 13 are new and none are retired (counts from the server). They're in `changes\excalidraw-11404.md`, and the workflow for this issue is complete.

**What each behavior is covered by**

| Behavior | Cases |
|---|---|
| Turning italic on and off with the "Italic" toggle or Ctrl+I / Cmd+I | TC-1 |
| Ctrl+I while editing, and text not jumping when editing ends | TC-2 |
| Ctrl+I with nothing selected: no browser "Page Info", the "I" tool shortcut doesn't fire | TC-3 |
| Where the toggle appears, and its tooltip "Italic (Ctrl+I)" | TC-4 |
| Several texts where only some are italic | TC-5 |
| Italic in different fonts, including slanted fonts with no real italic version; nothing cut off | TC-6 |
| Different scripts, including right-to-left and emoji: readable, nothing cut off, direction and alignment unchanged | TC-7 |
| The toggle in the 375 px mobile layout | TC-8 |
| Text inside a shape, an arrow label, a sticky note's auto-fit | TC-9, TC-10, TC-11 |
| New text uses the last italic setting | C-006 |
| Font, color and opacity changes keep italic | C-001, C-004 |
| Paste styles, copies, undo/redo | C-011, C-013, C-012 |
| Page reload, saved file, PNG and SVG export, live collaboration | C-014, C-015, C-016, C-017, C-018 |
| Copy to clipboard as PNG/SVG | TC-12 |
| Opening the file in an older version that has no italic | TC-13 |

C-002, C-003, C-005 and C-007 to C-010 are unchanged. None of the updates removes an existing check; each one adds italic to what the case already checks.

**Not covered**
- **Bold and italic for only part of a text:** the product owner put these out of scope.
- **What the saved file stores for italic:** the answers don't define it, so the cases only check what users can see.

**Assumptions:** the tooltip text, where the toggle appears, the shortcut details, the mixed-selection behavior, layout, saving/export/older version, copies and undo, and the platforms all come from my suggested answers, which you accepted. Five product names come from general knowledge, so the cases mark them "(verify)" for the tester to check:
- the "Opacity" label;
- the "Copy to clipboard as PNG" and "Copy to clipboard as SVG" menu items;
- which tool the I key selects;
- how the properties panel opens in the mobile layout.

**Why these values were sampled**
- **Fonts (TC-6):** the three quick-choice fonts, plus one font from the full list whose line height differs and which may have no real italic version.
- **Scripts (TC-7):** one row per script the product owner named. Right-to-left text is right-aligned and mixed text is centered, so a change in direction or alignment would be visible.

**Knowledge proposals:** I proposed 7 facts from the product owner's decisions, all tied to issue 11404 because italic isn't released yet. They cover the toggle and shortcut, mixed selection and the default for new text, fonts and scripts, text in shapes, copies and undo, and saving and export. Review them by running this in the qa-agent folder:

```
npm run review-knowledge
```

The product profile (areas, roles, platforms, glossary) is still an empty template. Filling it in would let future case sets rely on it instead of marking names "(verify)".
