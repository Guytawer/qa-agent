# Change set: excalidraw#99002

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T09:45:54.273Z (fingerprint 9c7d157aad75).

Scope: desktop Chrome, Firefox and Safari; TC-10 covers the mobile layout. Line height values are read in the "Line height" field (verify) of the properties panel while the text is selected, and are compared as numbers (1 equals 1.0). Presets: Tight = 1.0, Normal = 1.25, Loose = 1.5. Range: 0.8 to 2.5, step 0.05.

# Text properties

## TC-1 "Line height" presets on a multi-line text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element in the hand-drawn font at font size Medium, with three lines: "Line one", "Line two", "Line three". Its line height is 2 (typed in the "Line height" field (verify)).

| Preset to click | Field shows |
|---|---|
| "Tight" | 1.0 |
| "Normal" | 1.25 |
| "Loose" | 1.5 |

All three presets are below the starting value of 2, so each row should show the lines moving closer together.

Steps:
1. Click the text element.
2. Under "Line height", click the preset from the row.

Expected result:
- The three lines move closer together, and the gaps between them are equal.
- The selection box gets shorter.
- Only the clicked preset is highlighted, and the field shows the row's value.
- The text content, line breaks, font, font size, color and the box's top-left corner are unchanged.

## TC-2 "Line height" field: typed values, rounding and limits
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #99002

Preconditions: The canvas contains one text element with two lines, "Alpha" and "Beta", at line height Normal (1.25).

| Typed value | Field shows | Highlighted preset | Line spacing compared with Normal |
|---|---|---|---|
| 0.8 | 0.8 | none | tighter |
| 2.5 | 2.5 | none | looser |
| 0.75 | 0.8 | none | tighter |
| 2.55 | 2.5 | none | looser |
| 0 | 0.8 | none | tighter |
| -1 | 0.8 | none | tighter |
| 10 | 2.5 | none | looser |
| 1.33 | 1.35 | none | looser |
| 1.32 | 1.3 | none | looser |
| 1.27 | 1.25 | "Normal" | same |
| 0.98 | 1.0 | "Tight" | tighter |
| 1,5 | 1.5 | "Loose" | looser |

The rows cover both range limits, values just outside them, far-out and negative values, rounding up and down to 0.05, rounding onto a preset, and the decimal comma.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the field's whole content.
4. Type the value from the row.
5. Press Enter.

Expected result:
- The field shows the value from the "Field shows" column.
- The preset from the row is highlighted. In rows marked "none", no preset is highlighted.
- The line spacing matches the row's last column.
- The text content, line breaks, font and font size are unchanged.

## TC-3 "Line height" field: empty and non-numeric input
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99002

Preconditions: The canvas contains one text element with two lines, "Alpha" and "Beta", at line height Loose (1.5).

| Typed value |
|---|
| (empty: delete the content and type nothing) |
| abc |
| % |
| three spaces |

The rows cover an empty field, letters, a symbol and whitespace only.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the field's whole content.
4. Type the value from the row.
5. Press Enter.

Expected result:
- The field shows 1.5 again.
- "Loose" is highlighted.
- The line spacing of the text is unchanged.

## TC-4 New text before any line height is chosen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Excalidraw is open in a new private browser window, and no line height has been chosen in it.

| Font family | Field shows | Highlighted preset |
|---|---|---|
| Hand-drawn (Excalifont) | 1.25 | "Normal" |
| A font from the full font list whose own line height is 1.15 or 1.2 (verify which font) | that font's own value, 1.15 or 1.2 | none |

The rows are a quick-choice font, whose own value matches a preset, and a list font, whose own value matches no preset.

Steps:
1. Press T to choose the text tool.
2. Under "Font family", choose the font from the row.
3. Click an empty area of the canvas.
4. Type "Alpha".
5. Press Enter.
6. Type "Beta".
7. Press Esc.
8. Click the new text.

Expected result:
- The field shows the value from the row.
- The preset from the row is highlighted. In the row marked "none", no preset is highlighted.

## TC-5 Several texts with different line heights
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two text elements, each with two lines: "Alpha / one" at line height Tight (1.0) and "Beta / two" at line height Loose (1.5).

Steps:
1. Click "Alpha / one".
2. Shift+click "Beta / two".
3. Under "Line height", click "Normal".

Expected result:
- After step 2, no line height preset is highlighted, and the field shows no single number (it is empty or shows "mixed").
- After step 3, both texts have line height 1.25, "Normal" is highlighted and the field shows 1.25.
- The contents and positions of both texts are unchanged.

## TC-6 One-line text: box height and position
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one one-line text element "Single line" at line height Normal (1.25).

Steps:
1. Click "Single line".
2. Note where the selection box's top-left corner is and how tall the box is.
3. Under "Line height", click "Loose".
4. Under "Line height", click "Tight".

Expected result:
- After step 3, the selection box is taller than in step 2.
- After step 4, the selection box is shorter than in step 2.
- The box's top-left corner stays where it was in step 2 throughout.
- The text stays fully visible inside the box.

## TC-7 Font size change keeps the chosen line height
Action: create
Area: Text properties
Priority: Medium · Type: regression
Tags: #99002

Preconditions: The canvas contains one text element with two lines, "Alpha" and "Beta", at font size Medium and line height Loose (1.5).

Steps:
1. Click the text element.
2. Under "Font size", click "Very large".
3. Under "Font size", click "Small".

Expected result:
- After each step, "Loose" is highlighted under "Line height" and the field shows 1.5.
- After step 2, the gap between the lines grows together with the text size, and the lines do not overlap.
- After step 3, the gap shrinks together with the text size, and the lines do not overlap.

## TC-8 "Line height" control: labels, tooltips and no shortcut
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "Labels".

Steps:
1. Click "Labels".
2. Hover over each of the three line height presets.
3. Press Esc.
4. Press ? to open the help dialog (verify).

Expected result:
- The control is labelled "Line height" (verify), and the presets are labelled "Tight", "Normal" and "Loose".
- The tooltips read "Tight", "Normal" and "Loose".
- The help dialog lists no keyboard shortcut for line height.

## TC-9 "Line height" labels in a language other than English
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "Labels".

| Language |
|---|
| Deutsch |
| العربية (Arabic) |
| 简体中文 (Simplified Chinese) |

The rows cover a language with long words, a right-to-left language and a CJK language.

Steps:
1. Open the main menu.
2. In the language selector (verify), choose the language from the row.
3. Click "Labels".
4. Hover over each of the three line height presets.

Expected result:
- The control's label, the preset labels and the tooltips each show either a translation or the English text.
- No label or tooltip is empty or shows a raw key name (such as "labels.lineHeight").
- The labels do not overlap each other or the other controls in the panel.

## TC-10 "Line height" control in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Excalidraw is open in Chrome with device emulation set to 375 × 667 px, so the mobile layout is shown. The canvas contains one text element with two lines, "Alpha" and "Beta", at line height Normal.

Steps:
1. Tap the text element.
2. Open the properties panel (verify how it opens in the mobile layout).
3. Scroll to "Line height".
4. Tap "Loose".

Expected result:
- The three presets and the "Line height" field fit in the panel without horizontal scrolling and without overlapping.
- After step 4, "Loose" is highlighted, the field shows 1.5, and the lines of the text move farther apart.

## C-001 Font family: changing the font of a text element
Action: update C-001
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element in the hand-drawn font with two lines, "Flowchart" and "step", at line height Loose (1.5).

Steps:
1. Click the text element.
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.
- "Loose" is still highlighted under "Line height", the field shows 1.5, and the lines keep the Loose spacing.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "First" at font size Medium, in the hand-drawn font, at line height Normal.

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Under "Line height", click "Loose".
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.
10. Click "Second".

Expected result:
- "Second" is created at font size Large, in the normal font, at line height Loose: "Loose" is highlighted and the field shows 1.5.
- "First" keeps font size Large, the normal font and line height Loose.

# Text in shapes and on arrows

## TC-11 Text inside a rectangle: line height change
Action: create
Area: Text in shapes and on arrows
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines, at line height Normal.

Steps:
1. Click the rectangle.
2. Note the rectangle's width and height.
3. Under "Line height", click "Loose".
4. Under "Line height", click "Tight".

Expected result:
- After step 3, the lines move farther apart and the rectangle is taller than in step 2.
- After step 4, the lines move closer together and the rectangle is shorter than after step 3.
- The rectangle's width is the same as in step 2 throughout, and the line breaks do not change.
- No character crosses the rectangle border after either step.

## TC-12 Arrow label: line height change
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two rectangles joined by an arrow with the two-line label "yes" / "go on", at line height Normal.

Steps:
1. Click the arrow.
2. Under "Line height", click "Loose".

Expected result:
- The two lines of the label move farther apart.
- The label stays at the middle of the arrow and is fully visible.
- The arrow stays connected to both rectangles, and its path is unchanged.

## TC-13 Sticky note label: line height change
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool. Its label "Ideas for the next sprint planning meeting" is at font size Medium and line height Normal, and wraps onto several lines that fill most of the note.

Steps:
1. Click the sticky note.
2. Under "Line height", click "Loose".
3. Under "Line height", click "Tight".

Expected result:
- After each step, the label's lines move apart or together accordingly, and no character crosses the note's border.
- After step 2, the label may be shown smaller to fit the note, but "Medium" stays highlighted under "Font size".
- After step 3, the label is never shown larger than font size Medium.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red text "Source" at font size Large, in the normal font, at line height Loose (1.5), and a black text "Target" at font size Medium, in the hand-drawn font, at line height Normal (1.25).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font.
- "Target" is at line height Loose: "Loose" is highlighted and the field shows 1.5.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element with two lines, "Undo" and "me", at font size Medium and line height Normal.

| Control | Start value | New value |
|---|---|---|
| "Font size" | Medium | "Large" |
| "Line height" | Normal | "Loose" |

The rows are the existing font size check and the new line height control.

Steps:
1. Click the text element.
2. Under the control from the row, click the new value.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, the text is back at the start value after a single undo, and the start value is highlighted under the control.
- After step 4, the text is at the new value again, and the new value is highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red text with two lines, "Hypothesis" and "H1", at font size Large and line height Loose (1.5).

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Steps:
1. Click the text "Hypothesis H1".
2. Copy it the way given in the row.
3. Click the copy.

Expected result:
- The copy reads "Hypothesis" / "H1" and is red at font size Large.
- The copy is at line height Loose: "Loose" is highlighted and the field shows 1.5.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red text with two lines, "Survives" and "reload", at font size Large, in the normal font, at line height Loose (1.5).

Steps:
1. Reload the browser tab.
2. Click the text.

Expected result:
- The text is still red, at font size Large, in the normal font, at the same position.
- The text is at line height Loose: "Loose" is highlighted and the field shows 1.5.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red text with two lines, "Saved" and "style", at font size Large, in the normal font, at line height 1.85 (typed in the "Line height" field). 1.85 is used because it matches no preset, so the exact value must be stored.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click the text.

Expected result:
- The text is red, at font size Large, in the normal font, at the same position.
- The "Line height" field shows exactly 1.85, and no preset is highlighted.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. Among them are a two-line text "Tight / lines" at line height Tight and a two-line text "Loose / lines" at line height Loose.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The gap between the lines of "Tight / lines" and of "Loose / lines" is the same as on the canvas.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text in the hand-drawn font at line height Tight and a two-line text in the normal font at line height Loose. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The gap between the lines of each text is the same as on the canvas, and no line overlaps another.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text with two lines, "Shared" and "note", at line height Normal.

| Control | Value to click | What user B sees |
|---|---|---|
| "Stroke" | the red color | the text in red |
| "Line height" | "Loose" | the two lines farther apart; with the text selected, "Loose" is highlighted |

The rows are the existing color check and the new line height control.

Steps:
1. As user A, click the text.
2. As user A, under the control from the row, click the value from the row.
3. As user B, look at the text.

Expected result:
- User B sees what the row's last column says, without reloading.
- The text content and position are the same for both users.