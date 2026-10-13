## Turn 1: runner

Write test cases for Excalidraw issue #11404.

## Turn 1: agent (tools: Skill, Read, Read, mcp__qa-agent__get_session, mcp__qa-agent__get_issue, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__read_knowledge, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__search_cases, mcp__qa-agent__open_session)

I read issue #11404, "Add support for italic text". It's a feature request from a user and has no labels. The server found no suspicious content in the issue or its two comments. Both comments are from contributors offering to implement it, and they say nothing about how it should behave.

The product profile isn't set up yet, so I'm working from the team's knowledge base and the existing cases. I found 18 cases (C-001 to C-018). None of them covers italic, but several will probably need an update: font family, applying a style to several texts, the default for new text, text in shapes, copy and paste styles, copies, undo, reload, saved files, PNG and SVG export, and live collaboration.

**What the issue asks for:** a way to make text italic. The author suggests three alternatives (an Italic option in the style panel, Ctrl+I / Cmd+I, or an italic font) and doesn't define any behavior. Before I write cases, I need these points decided:

1. **Which form ships.** *Suggested:* an "Italic" toggle next to the text align control, plus Ctrl+I (Cmd+I on macOS). No separate italic font in the font picker.
2. **How much of the text becomes italic.** *Suggested:* the whole text element only. You can't make just some words italic.
3. **Fonts that have no italic version** (Excalifont, Comic Shanns, CJK). *Suggested:* the toggle works with every font. Where no italic version exists, the text is slanted instead. The toggle is never disabled.
4. **Where the toggle shows.** *Suggested:* when a text, a shape with text, an arrow label or a sticky note is selected, or the Text tool is active. It's hidden for shapes without text and when nothing is selected. If a text and an empty shape are selected together, the toggle shows and applies only to the text.
5. **Ctrl+I.** *Suggested:* it turns italic on or off for the selected text, or for the text being edited (the whole element, even if only some letters are highlighted). With nothing selected it does nothing. The browser's own Ctrl+I action (in Firefox, Page Info) never opens while the canvas has focus.
6. **Several texts, only some italic.** *Suggested:* the toggle shows as off. One click makes all of them italic; a second click removes italic from all.
7. **Default for new text.** *Suggested:* the last italic choice carries over to new text.
8. **Layout.** *Suggested:* slanted letters are never cut off at the edge. Text in a shape re-wraps and the shape grows taller if needed. Arrow labels stay in the middle of the arrow, and sticky note auto-fit takes italic into account.
9. **While editing.** *Suggested:* the text is italic while you type, so it doesn't jump when editing starts or ends.
10. **Copies and undo.** *Suggested:* copy and paste styles, copy and paste, Ctrl+D, Alt+drag and library items all keep italic. One undo reverses one italic change.
11. **Saving, export and sharing.** *Suggested:* italic survives a reload, a saved .excalidraw file, PNG and SVG export (SVG also on a computer without the fonts), copy as PNG/SVG, and live collaboration. An older Excalidraw version opens the file without error and shows the text upright.
12. **Other scripts.** *Suggested:* italic works for Latin, Cyrillic, right-to-left and CJK text without cutting off letters. Emoji may stay upright.
13. **Tooltip, languages, mobile.** *Suggested:* the tooltip reads "Italic (Ctrl+I)", or "Cmd+I" on macOS. In other languages a missing translation falls back to English, never to an empty label or a code name. The toggle fits the 375 px mobile panel and works by tap.

Answer each point, or say "accept suggestions". You can also accept them all except the ones you change.

## Turn 2: runner

Answers from the product owner:
- A panel toggle and Ctrl/Cmd+I; one italic property per text element, no separate font.
- Whole element only. Bold is out of scope.
- Synthetic oblique is allowed; text stays readable and unclipped in Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew (right to left), emoji and mixed scripts; direction and alignment unchanged.
- The last italic value becomes the default for new text.
- Color and opacity changes keep italic.
For any question these do not cover, accept your suggested answer.

## Turn 2: agent (tools: mcp__qa-agent__record_answers)

I've recorded the answers. Each line is marked either "(user)" for the product owner's answers or "(accepted suggestion)" for questions they didn't cover. Two points come straight from the product owner:

- **Other scripts (12):** their wording replaces my suggestion. Emoji must also stay readable and not be cut off.
- **Color and opacity (new, 14):** changing either one keeps the text italic.

Please check the recorded answers, then approve them by running this in a terminal in the qa-agent folder:

```
npm run approve -- 11404
```

Once they're approved, I'll send you the case plan to approve next.

## Turn 3: runner

I approved the answers with the approve command. Continue.

## Turn 3: agent (tools: mcp__qa-agent__submit_plan)

Here's the case plan. The server counts **26 cases: 12 updated, 14 new, 0 retired**.

**Text properties**
- update C-001: the text starts italic and stays italic after you change the font family.
- update C-004: the text starts italic, an opacity change is added, and the text stays italic after the color and opacity changes.
- update C-006: "Italic" is also turned on before the new text is created, and the new text comes out italic.
- create TC-1: "Italic" toggle on a text element. This includes the tooltip and checks that no letter is cut off.
- create TC-2: Ctrl+I on a selected text.
- create TC-3: Ctrl+I with nothing selected. Nothing happens, and the browser's own action doesn't open.
- create TC-4: Ctrl+I while editing with only part of the text highlighted. The whole text becomes italic, and the editor shows italic so nothing jumps.
- create TC-5: Where the toggle shows, one row per kind of selection with shown or hidden for each.
- create TC-6: Italic in fonts with and without an italic version.
- create TC-7: Italic in different scripts: Latin, Cyrillic, Chinese, Japanese, Arabic, Hebrew, emoji and mixed.
- create TC-8: Several texts with mixed italic, plus an empty shape in the selection.
- create TC-9: The "Italic" label in other interface languages.
- create TC-10: The toggle in the mobile layout.

**Text in shapes and on arrows**
- update C-009: adds turning on "Italic" for the shape. The text becomes italic and re-wraps, and the shape's width stays the same.
- create TC-11: Italic arrow label.
- create TC-12: Italic sticky note label.

**Styles, copies and history**
- update C-011: the source text is also italic, and paste styles makes the target italic.
- update C-013: the original is also italic, and every copy is italic.
- update C-012: adds turning "Italic" on, then one undo and one redo.

**Files, sharing and export**
- update C-014: italic is kept after a reload.
- update C-015: italic is kept in a saved file after it's reopened.
- update C-016: an italic text is italic in the PNG export.
- create TC-13: Italic text copied to the clipboard as PNG and SVG.
- update C-017: an italic text is italic in the SVG on a second computer.
- update C-018: user A turns on "Italic" and user B sees it.
- create TC-14: A file with italic text opened in an older Excalidraw version.

**Not changed:** C-002, C-003, C-007, C-008, C-010.

The updates only add italic steps and checks. None of them removes an existing check, so no current coverage is lost.

If the plan looks right, approve it by running this in a terminal in the qa-agent folder:

```
npm run approve -- 11404
```

## Turn 4: runner

I approved the plan with the approve command. Continue.

## Turn 4: agent (tools: mcp__qa-agent__search_cases, mcp__qa-agent__save_changes, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge, mcp__qa-agent__propose_knowledge)

I've saved the test cases for issue #11404 to `changes/excalidraw-11404.md`. The server reports **26 cases: 12 updated, 14 new, 0 retired**, and the workflow for this issue is complete.

**Updated existing cases (12):** C-001, C-004, C-006, C-009, C-011, C-012, C-013, C-014, C-015, C-016, C-017, C-018. Each one gains an italic step or check. None of their current checks were removed.

**New cases (14):** TC-1 to TC-14.

**What's covered**
| Behavior | Cases |
|---|---|
| Toggle turns italic on and off, tooltip, no cut-off letters | TC-1 |
| Ctrl+I on a selection; with nothing selected; while editing (whole text changes, no jump) | TC-2, TC-3, TC-4 |
| Where the toggle shows | TC-5 |
| Fonts with no italic version, other scripts, text direction and alignment | TC-6, TC-7 |
| Several texts with mixed italic, plus an empty shape in the selection | TC-8 |
| Other interface languages, mobile layout | TC-9, TC-10 |
| Italic kept when font, color or opacity changes; default for new text | C-001, C-004, C-006 |
| Shape text re-wraps, arrow label, sticky note auto-fit | C-009, TC-11, TC-12 |
| Paste styles, copies, undo and redo | C-011, C-013, C-012 |
| Reload, saved file, PNG and SVG export, clipboard, collaboration, older version | C-014, C-015, C-016, C-017, TC-13, C-018, TC-14 |

**Not covered**
- **Bold:** the product owner put it out of scope.
- **Italic on only part of a text:** that isn't possible by decision. TC-4 checks that highlighting a few words still changes the whole text.
- **C-002, C-003, C-007, C-008, C-010:** left unchanged because italic doesn't change the behavior they test. Text alignment under italic is checked in TC-7.

**Assumptions**
- These are your suggested answers, which you accepted for points the product owner didn't cover: toggle placement and tooltip, where the toggle shows, Ctrl+I details, mixed selection, layout, editing, copies and undo, saving and export, languages, and mobile.
- These labels didn't come from the knowledge base or your answers, so they're marked **(verify)** for the tester to check first:
  - the "Opacity" control
  - the language list in the main menu
  - the "Copy to clipboard as PNG/SVG" menu items
  - how to open the properties panel on mobile
  - Firefox's "Page Info" binding for Ctrl+I

**Why I picked these sample values**
- **Fonts (TC-6):** the three quick-choice fonts plus one from the full list. Excalifont and Comic Shanns test the synthetic slant.
- **Scripts (TC-7):** every script the product owner named. Arabic and Hebrew are right-aligned, which is where a slant is most likely to cut off letters.
- **Languages (TC-9):** German for long words, Arabic for a right-to-left interface, Japanese for a different script.
- **Browsers (TC-3):** Firefox because of its Ctrl+I binding, plus Chrome and Safari.

I also proposed 6 facts from the product owner's decisions to the knowledge base. Each one is tagged as not yet released (issue 11404). To review them, run this in the qa-agent folder:

```
npm run review-knowledge
```

The product profile is still the empty template. Filling it in would let future cases use your team's area names and glossary.
