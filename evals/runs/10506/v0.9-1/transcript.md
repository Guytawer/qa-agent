## Turn 1: runner

Write test cases for Excalidraw issue #10506.

## Turn 1: agent (tools: Skill, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, Read, Read, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I've read issue #10506 and opened the test-case session. I need your answers to the questions below before I plan or write any cases.

**What the issue asks:** The author asks for font size presets larger than "Very large" ("2xl .. 10xl"). Their follow-up comment says they found they can resize text from its corner. They then ask how to make two large texts the same size.

**Things to know first:**
- The issue has no suspicious content (no hidden instructions, outside links or credential requests).
- The product profile isn't set up yet, so product areas come from the existing cases and the team's reviewed facts.
- The team's facts already mention an earlier session for #10506 (confirming the "F" field is editable), but no session for it exists now, so I started a new one.
- These existing cases are likely affected:
  - **Text properties:** C-002 (preset sizes), C-005 (several texts), C-006 (default for new text)
  - **Text in shapes:** C-009
  - **Styles, copies and history:** C-011, C-012, C-013
  - **Files and export:** C-014, C-015, C-016

**Open questions** (each has a suggested answer):

1. **What's in scope?** The issue asks for bigger presets, but the comment's real need (two big texts at the same size) already works today. You can select both texts and click a preset, type the size in the "F" field (Alt+/), or use paste styles. *Suggested:* the feature is new, larger presets in the "Font size" control. The cases also cover making two large texts the same size, using the new presets and the existing tools.
2. **Names and values of the new presets.** Today they are Small 16, Medium 20, Large 28 and Very large 36. *Suggested:* the product owner gives the exact list. Until then I'd use two placeholders: "Extra large" = 48 and "Huge" = 64, after "Very large" in the same row.
3. **Upper limit.** *Suggested:* the largest preset is the largest preset value. The "F" field, Ctrl+Shift+> and corner resizing keep their current limits.
4. **Which preset is highlighted when the size matches none** (for example 50 after a corner resize)? *Suggested:* none. A text at exactly a new preset's value highlights that preset.
5. **Several texts with different sizes.** *Suggested:* no preset is highlighted. Clicking a new preset sets all of them to exactly that value.
6. **Keyboard shortcuts.** *Suggested:* the new presets get none. Ctrl+Shift+> and < keep stepping by ×1.1 and don't snap to presets.
7. **Text in shapes, arrow labels and sticky notes.** *Suggested:* the new presets apply to all of them. Shapes grow taller and keep their width. A sticky note still auto-fits and never shows text larger than the picked size.
8. **Default for new text.** *Suggested:* a chosen new preset becomes the default for new text, like the existing presets.
9. **Files and older versions.** *Suggested:* the size is kept after a reload, in saved files, in PNG/SVG export and in live collaboration. An older Excalidraw version shows the same size, with no preset highlighted.
10. **Platforms and layout.** *Suggested:* desktop Chrome, Firefox and Safari, plus the mobile layout. The longer preset row must not be clipped or overlap anything in narrow windows.

Answer by number, or say "accept suggestions" (you can name exceptions). I'll record your answers and then ask you to approve them.

## Turn 2: runner

Answers from the product owner:
- More presets only, no typed size field in the Font size control.
- Two new presets after "Very large": "Huge" = 56 and "Giant" = 96. The existing four keep their labels and sizes.
- A size between presets, or a selection with mixed sizes, highlights no preset until one is clicked; clicking a preset sets that exact size on every selected text. A text at exactly 56 or 96, however it got there, shows its preset highlighted.
- Tooltips "Huge" and "Giant"; no new shortcuts; the increase and decrease shortcuts are unchanged and have no upper limit.
- Text in shapes wraps and the shape grows taller; arrow labels stay at the middle; sticky note labels offer both presets and keep auto-fit, with the picked preset highlighted.
- Copy and paste styles, copies and undo/redo carry the new sizes; reload, saved file, PNG and SVG export and live collaboration keep them.
- All six presets fit the 375 px mobile panel. Latest Chrome, Firefox and Safari on desktop plus Safari on iOS. Older Excalidraw versions are out of scope.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I've recorded the product owner's answers for #10506. For the questions they didn't cover, I used my suggested answers, as you said:
- **Q3, limits:** "Giant" (96) is the largest preset. The "F" field and corner resizing keep their current limits.
- **Q8, default for new text:** a new preset, once chosen, becomes the default for new text.

The recorded text marks each line "(user)" or "(accepted suggestion)".

To approve the answers, run this in a terminal in the qa-agent folder:

```
npm run approve -- 10506
```

Tell me when it's done, and I'll plan the cases (which existing cases to update and which new ones to add) for your approval.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan, mcp__qa-agent__submit_plan)

The plan for #10506 is recorded and needs your approval. It has **19 cases: 11 updated, 8 new, 0 retired.**

**Text properties**
- **update C-002:** a data table of presets, covering "Huge" (56), "Giant" (96), "Very large" and "Small". Exact sizes are read in the "F" field, and the clicked preset is highlighted.
- **create TC-1:** the "Font size" control shows six presets in order, with the "Huge" and "Giant" tooltips (desktop).
- **create TC-2:** which preset is highlighted when the size is set without a preset ("F" field, Ctrl+Shift+>, corner resize). Exactly 56 or 96 highlights its preset; any other size highlights none.
- **update C-005:** several texts with mixed sizes, one of them resized by its corner. No preset is highlighted, and clicking "Huge" sets all of them to exactly 56. This covers the issue's question about making two big texts the same size.
- **update C-006:** new text uses "Giant" after it was last chosen.
- **create TC-3:** the font size shortcuts go past "Giant" with no upper limit. Steps are ×1.1 (96 → 106 → 117, back down to 96), and the highlight follows.
- **create TC-4:** the 375 px mobile panel on Safari iOS shows all six presets, and they work.
- **create TC-5:** text at "Giant" in right-to-left, CJK, emoji and mixed scripts is not clipped, and the selection box encloses it.

**Text in shapes and on arrows**
- **update C-009:** rectangle text set to "Giant" wraps, and the rectangle grows taller with its width unchanged.
- **create TC-6:** an arrow label at "Huge" or "Giant" stays at the middle of the arrow.
- **create TC-7:** a sticky note label offers "Huge" and "Giant", highlights the picked one, and still auto-fits.

**Styles, copies and history**
- **update C-011:** paste styles carries "Giant".
- **update C-012:** undo and redo of a change to "Huge".
- **update C-013:** copies of a text at "Giant" keep the size.

**Files, sharing and export**
- **update C-014:** a text at "Giant" keeps its size after a reload.
- **update C-015:** a text at "Huge" keeps its size in a saved .excalidraw file.
- **update C-016:** the PNG export case adds texts at "Huge" and "Giant".
- **create TC-8:** SVG export of texts at "Huge" and "Giant" matches the canvas.
- **update C-018:** the live collaboration case adds a font size change to "Giant" next to the existing color change.

**Not changed:** C-001, C-003, C-004, C-007, C-008, C-010, C-017.

**Coverage the existing cases will lose:** C-005, C-006, C-009, C-011 and C-013 will use the new presets instead of "Large", and C-012 will use "Huge" instead of "Large". The same actions are still tested, and the existing presets stay covered by C-002 and TC-1. But once this change set is applied, nothing checks these particular actions with "Large" any more. C-005 also stops checking three texts that start at the same size.

To approve the plan, run this in the qa-agent folder:

```
npm run approve -- 10506
```

Tell me when it's done, and I'll write and save the cases.

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

The 19 test cases for #10506 are saved to `changes\excalidraw-10506.md` (11 updated, 8 new, 0 retired). The saved version has one wrong number, which you need to fix before using it.

**Wrong number in TC-3:** the last expected result says the "F" field shows **249** after 10 more presses of Ctrl+Shift+>. It should be **252** (96 → 106 → 117 → 129 → 142 → 156 → 172 → 189 → 208 → 229 → 252). I noticed this after saving. My attempt to save a corrected copy was blocked because the session counts as finished. You can either:
- change 249 to 252 in the file yourself, or
- run `npm run approve -- 10506` again, and I'll re-save the corrected cases.

**What changed**
- **Updated (11):** C-002, C-005, C-006, C-009, C-011, C-012, C-013, C-014, C-015, C-016, C-018.
- **New (8):** TC-1 to TC-8.
- **Not changed:** C-001, C-003, C-004, C-007, C-008, C-010, C-017.

**Coverage**

| Behavior | Cases |
|---|---|
| Six presets in order, "Huge" and "Giant" tooltips, no new shortcuts | TC-1 |
| Exact sizes 56 and 96 when a preset is clicked | C-002 |
| Preset highlighted only at exactly 56 or 96, however the text got there; none for sizes in between | TC-2 |
| Giving texts of mixed sizes (including one resized by its corner) the same size with one click — the issue author's actual question | C-005 |
| Shortcuts go past 96 with no upper limit | TC-3 |
| New text uses the last chosen preset | C-006 |
| 375 px mobile panel on Safari iOS | TC-4 |
| Right-to-left, CJK, emoji and mixed scripts at "Giant" | TC-5 |
| Text in shapes, arrow labels, sticky notes | C-009, TC-6, TC-7 |
| Paste styles, copies, undo/redo | C-011, C-013, C-012 |
| Reload, saved file, PNG and SVG export, live collaboration | C-014, C-015, C-016, TC-8, C-018 |

**Not covered**
- Older Excalidraw versions: the product owner put them out of scope.
- The "F" field's own limits: they don't change.
- No new shortcuts: TC-1 checks that the tooltips show none, but nothing tests key presses for it.

**Assumptions** (from suggested answers you accepted)
- "Giant" (96) is the largest preset. The "F" field and corner resizing keep their current limits.
- A newly chosen preset becomes the default for new text.

**Things a tester should check while running the cases**
- **TC-4:** how the style panel opens in the mobile layout is marked (verify).
- **TC-2 and C-005:** these assume the text's bottom-right corner handle resizes the font, as the issue author describes.
- **C-009 and TC-6:** the rectangle width and arrow length are approximate. They are chosen so the text wraps and the label is wider than a short arrow.

As I warned with the plan, five existing cases (C-005, C-006, C-009, C-011, C-013) now use "Giant" or "Huge" instead of "Large", and C-012 uses "Huge" instead of "Large". The existing presets stay covered by C-002 and TC-1.

I also proposed 7 facts from the product owner's answers. They're stored as not-yet-released knowledge for #10506. To review them, run this in the qa-agent folder:

```
npm run review-knowledge
```

The product profile is still empty. It's worth filling in the areas, platforms and glossary so future sessions don't have to work them out from existing cases.
