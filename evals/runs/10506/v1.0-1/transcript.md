## Turn 1: runner

Write test cases for Excalidraw issue #10506.

## Turn 1: agent (tools: Skill, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, Read, Read, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I've read issue #10506 and started its test-case session. Nothing suspicious turned up in the issue. Before I write any cases I need your answers to the questions below.

**What the issue asks:** the author wants font sizes larger than the presets ("2xl .. 10xl"). In a later comment they note they can already make text bigger by dragging a corner. What they still can't do is give two big texts exactly the same size.

**Existing cases this touches:** C-002 (font size presets), C-005 (one style change applies to several texts), C-006 (new text uses the last style), C-009 (text in shapes), C-011 to C-013 (paste styles, undo and redo, copies), and C-014 to C-016 (reload, saved file, PNG export).

**Questions** (each has a suggested answer):

1. **Scope:** Is this (a) new larger presets, (b) no product change, only tests for the ways to get equal large text that already exist, or (c) both? *Suggested: (c).*
2. **Preset names and values:** The current presets are Small 16, Medium 20, Large 28 and Very large 36. *Suggested: keep them and add "2XL" = 48, "3XL" = 64 and "4XL" = 96, not nine presets up to 10XL.*
3. **Layout:** *Suggested: on desktop the new presets go in the same row. On small screens and touch, the row wraps or scrolls, and every preset can be reached without being cut off.*
4. **Tooltips and shortcuts:** *Suggested: each preset's tooltip is its label, with no new shortcuts.*
5. **Upper limit:** *Suggested: no new maximum. Sizes above the largest preset can still be reached as today, through the "F" field in the "Properties" panel, Ctrl+Shift+> and corner resizing.*
6. **Highlighting:** *Suggested: the matching preset is highlighted when a size equals a new preset value, for example 64 typed in "F". When the size matches no preset, nothing is highlighted.*
7. **Several texts with different sizes selected:** *Suggested: no preset is highlighted, and one click sets that size on all of them. This also answers the author's "same size" question.*
8. **Text inside shapes, arrow labels and sticky notes:** *Suggested: the new presets work everywhere. Text in a shape wraps and the shape grows taller. An arrow label stays at the middle of the arrow. A sticky note keeps its auto-fit: the text can be shown smaller to fit, never larger than the picked size.*
9. **Default for new text:** *Suggested: yes, the last chosen preset becomes the default for new text.*
10. **Existing drawings and older versions:** *Suggested: existing text keeps its size. An older version opening a file shows the new sizes correctly, with no preset highlighted and no error.*
11. **Interface language:** *Suggested: the new labels are translated, a missing translation falls back to English, and long labels or right-to-left layouts don't break the control. Test in German and Arabic (we still need to confirm which languages have translations).*

You can answer each one, or reply "accept suggestions". After I record your answers, you'll need to approve them before I plan the cases.

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

I've recorded the answers. Each line is marked as either the product owner's answer or a suggestion you accepted for a point their answers didn't cover. Points 3, 5, 10 and 11 each mix a little of both.

One interpretation to check: "More presets only" sounds to me like a limit on what changes in the product, not on testing. So I kept tests for the ways that already exist to give two texts the same size: selecting both and clicking a preset, the "F" field, and paste styles. That's what the author was actually asking about. If the product owner meant to leave those out, tell me and I'll drop them.

To approve the answers, run this in a terminal in the qa-agent folder:

```
npm run approve -- 10506
```

Once they're approved, I'll plan the cases.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__get_session, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__submit_plan, mcp__qa-agent__submit_plan)

I've submitted the plan: **19 cases: 11 updated, 8 new, 0 retired.**

**Text properties**
- **TC-1 (new):** The "Font size" control shows six presets in order, including "Huge" and "Giant", with tooltips. Checked with a text selected, the Text tool active, and a sticky note selected.
- **C-002 (update):** Switching presets now includes "Huge" (56) and "Giant" (96). Exact sizes are read in the "F" field, and the clicked preset is highlighted. Small and Very large keep 16 and 36.
- **TC-2 (new):** Which preset is highlighted when a size is reached without clicking a preset. Rows:
  - typing 56, 96 or 57 in "F";
  - Ctrl+Shift+> and Ctrl+Shift+< across 96;
  - Ctrl+Shift+> above 96, to show there is no upper limit;
  - resizing from a corner.
- **C-005 (update):** Several texts with mixed sizes are selected and no preset is highlighted. One click on "Giant" sets all of them to 96.
- **TC-3 (new):** Several texts set to one exact size by typing in the "F" field.
- **C-006 (update):** New text uses "Giant" after it was the last size chosen.
- **TC-4 (new):** The control on a 375 px mobile panel in Safari on iOS.
- **TC-5 (new):** The control in German and in Arabic (right-to-left).

**Text in shapes and on arrows**
- **C-009 (update):** Text in a rectangle set to "Giant" wraps, the rectangle grows taller with the same width, and "Giant" is highlighted.
- **TC-6 (new):** An arrow label set to "Huge" stays at the middle of the arrow.
- **TC-7 (new):** Sticky note label at "Giant" and "Huge": the picked preset is highlighted, and auto-fit never shows the text larger than the picked size.

**Styles, copies and history**
- **C-011 (update):** Paste styles carries 96 to the target text.
- **C-012 (update):** Undo and redo of a change to "Huge".
- **C-013 (update):** Copies of a text at "Giant" keep 96.

**Files, sharing and export**
- **C-014 (update):** A page reload keeps a text at "Giant".
- **C-015 (update):** A saved .excalidraw file keeps texts at "Huge" and "Giant".
- **C-016 (update):** PNG and SVG exports of texts at "Huge" and "Giant" match the canvas, with nothing cut off.
- **C-018 (update):** Live collaboration also carries a change to "Giant". The existing color check stays.
- **TC-8 (new):** A drawing saved before the new presets keeps its text sizes.

**Not changed:** C-001, C-003, C-004, C-007, C-008, C-010, C-017

**Warnings: checks the updates take out of the existing cases**
- C-005 today starts from texts that are all the same size and checks "Large". After the update it starts from mixed sizes and checks "Giant".
- C-011, C-012, C-013, C-014 and C-015 now use "Huge" or "Giant" instead of "Large". After this change only C-002 still checks the old presets.

To approve the plan, run this in the qa-agent folder:

```
npm run approve -- 10506
```

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I've saved the test cases for issue #10506 to `changes\excalidraw-10506.md`: **19 cases: 11 updated, 8 new, 0 retired.** They follow the plan you approved. They are not checked against the product yet, because "Huge" and "Giant" don't exist in it yet.

**What the cases cover**
- **The new presets and their tooltips:** TC-1 checks them with a text selected, with the Text tool active, and with a sticky note selected.
- **Exact sizes 56 and 96:** C-002, read in the "F" field.
- **Which preset is highlighted** when a size is reached without clicking one: TC-2. This covers typing 56, 96 or 57 in "F", and Ctrl+Shift+> and Ctrl+Shift+< landing on 96 from either side. It also covers going past 96 to 117 and 550 (no upper limit), and resizing from a corner.
- **Giving several texts the same size:** C-005 does it with a preset, TC-3 with the "F" field, and C-011 with paste styles.
- **Other places the sizes appear:**
  - new text uses the last preset (C-006);
  - the 375 px panel in Safari on iOS (TC-4);
  - German and Arabic (TC-5);
  - text in a rectangle, an arrow label and a sticky note (C-009, TC-6, TC-7);
  - undo and redo, and copies (C-012, C-013);
  - page reload, saved file, PNG and SVG export, and live collaboration (C-014, C-015, C-016, C-018);
  - a drawing saved before the change (TC-8).

**Not covered**
- Older Excalidraw versions opening the new sizes: the product owner put this out of scope.
- English shown when a translation is missing: there's no reliable way to trigger this by hand, so it needs a check by a developer.

**Steps marked (verify), to check before running**
- Whether the "F" field is shown when several texts are selected (TC-3).
- Corner resizing setting the font size (TC-2).
- How the mobile style panel opens (TC-4).
- Where the language selector is (TC-5).

**Decisions I made for points the product owner's answers didn't cover**
- The ways that already exist to make texts the same size are tested as regression.
- The new presets sit in the same row on desktop.
- The last chosen preset becomes the default for new text.
- Existing text keeps its size.
- Languages are tested in German and Arabic.

**Before you use the cases**
- **Coverage moved:** C-005 no longer checks texts that all start at the same size. C-011, C-012, C-013, C-014 and C-015 now use "Huge" or "Giant" instead of "Large". Only C-002 still checks the old presets.
- **Product profile is empty:** that file is still the blank template, so I used the area names from the existing cases.

I also proposed 5 of the product owner's decisions to the team's shared product notes. They're attached to issue #10506, so they won't count as current behavior until it ships. To review them, run:

```
npm run review-knowledge
```
