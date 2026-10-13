# Change set: excalidraw#99002

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:54:42.192Z (fingerprint be6631de7111).

Scope: line height control for text (issue 99002), desktop browsers plus the 375 px mobile layout. Exact line heights are read from the number field of the "Line height" control in the properties panel. Agreed values: range 0.8 to 2.5, step 0.05, presets "Tight" = 1.0, "Normal" = 1.25, "Loose" = 1.5. Older Excalidraw versions opening the data are out of scope.

# Text properties

## C-001 Font family: changing the font of a text element
Action: update C-001
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text element "Flowchart step / second line" in the hand-drawn font, with line height "Loose" (1.5).

Steps:
1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text content, size, color and position are unchanged.
- The "Line height" field still shows 1.5, "Loose" is still highlighted, and the gap between the two lines stays wide.
- The selection box resizes to fit the new font.

## TC-1 "Line height" presets on a multi-line text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text element "One / Two / Three" in the hand-drawn font at font size Medium. Its line height was never changed, so the "Line height" field shows 1.25.

| Preset clicked | Field shows | Line gap compared with the previous row |
|---|---|---|
| "Tight" | 1 | smaller than at 1.25 |
| "Loose" | 1.5 | larger than at "Tight" |
| "Normal" | 1.25 | smaller than at "Loose" |

All three presets are covered, in an order where each click visibly changes the spacing.

Steps:
1. Click the text element.
2. Under "Line height", click the preset from the table.

Expected result:
- The clicked preset is highlighted and the field shows the value from the table.
- The space between the lines changes as the table says, for all lines of the element.
- The selection box height follows the new spacing; its width is unchanged.
- The text content, font, size, color and alignment are unchanged.

## TC-2 "Line height" typed value: boundaries, clamping and rounding
Action: create
Area: Text properties
Priority: High · Type: boundary
Tags: #99002

Preconditions: The canvas contains one two-line text element "Alpha / Beta" with line height "Normal" (1.25).

| Typed value | Field shows after Enter | Highlighted preset |
|---|---|---|
| 0.8 | 0.8 | none |
| 0.75 | 0.8 | none |
| 0.5 | 0.8 | none |
| 2.5 | 2.5 | none |
| 2.55 | 2.5 | none |
| 5 | 2.5 | none |
| 1.23 | 1.25 | "Normal" |
| 1.42 | 1.4 | none |
| 1,5 | 1.5 | "Loose" |
| 1 | 1 | "Tight" |

The values cover both range limits, one step and far outside each limit, rounding up and down to 0.05, a comma decimal, and typed values that equal a preset.

Steps:
1. Click "Alpha / Beta".
2. Under "Line height", click the number field.
3. Replace its content with the typed value from the table.
4. Press Enter.

Expected result:
- The field shows the value from the "Field shows after Enter" column.
- The preset from the "Highlighted preset" column is highlighted; for "none", no preset is highlighted.
- The space between "Alpha" and "Beta" matches the shown value: tighter at 0.8, widest at 2.5.
- No error message appears.

## TC-3 "Line height" typed value: empty or non-numeric input
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99002

Preconditions: The canvas contains one two-line text element "Alpha / Beta" with line height "Loose" (1.5).

| Typed value |
|---|
| (empty field) |
| abc |
| - |
| 1.5x |

The values cover an empty field, letters, a lone sign, and a number with trailing garbage.

Steps:
1. Click "Alpha / Beta".
2. Under "Line height", click the number field.
3. Replace its content with the typed value from the table.
4. Press Enter.

Expected result:
- The field shows 1.5 again and "Loose" stays highlighted.
- The spacing between "Alpha" and "Beta" is unchanged.
- No other property of the text changes.

## TC-4 "Line height" control: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a text "Note", a rectangle with the text "Box" inside it, an arrow labeled "yes", and a sticky note with the text "Todo".

| What is selected or active |
|---|
| The text "Note" |
| The rectangle holding "Box" |
| The arrow labeled "yes" |
| The sticky note holding "Todo" |
| The Text tool, chosen with T, with nothing selected |

Each row is one kind of element that can hold text, plus the Text tool.

Steps:
1. Select the element from the table, or choose the tool from the table.
2. Look at the properties panel.

Expected result:
- The properties panel shows the "Line height" control with "Tight", "Normal", "Loose" and the number field.
- For a selected element, the field shows that element's line height.

## TC-5 "Line height" control: where it is hidden
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains a rectangle without text and an inserted image.

| What is selected |
|---|
| The rectangle without text |
| The image |
| Nothing (click an empty area of the canvas) |

Steps:
1. Select what the table says.
2. Look at the properties panel.

Expected result:
- No "Line height" control is shown.

## TC-6 "Line height" with a text and a plain shape selected together
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Alpha / Beta" with line height "Normal" (1.25), and a separate rectangle without text.

Steps:
1. Click "Alpha / Beta".
2. Shift+click the rectangle.
3. Under "Line height", click "Loose".

Expected result:
- The "Line height" control is shown while both are selected.
- "Alpha / Beta" changes to line height 1.5.
- The rectangle's size, position, stroke and fill are unchanged.

## TC-7 "Line height" of an existing text in a font with its own line height
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Alpha / Beta" in a font from the full font list whose own line height is 1.2 (verify which font). Its line height was never changed.

Steps:
1. Click "Alpha / Beta".
2. Look at the "Line height" control.

Expected result:
- The field shows 1.2.
- No preset is highlighted.
- The spacing between the lines is the same as before the text was selected.

## TC-8 "Line height" never set: font family change follows the new font
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Alpha / Beta" in the "Normal" font. Its line height was never changed, and the field shows 1.25.

Steps:
1. Click "Alpha / Beta".
2. Under "Font family", open the full font list.
3. Pick a font whose own line height is 1.2 (verify which font).

Expected result:
- The "Line height" field shows 1.2.
- No preset is highlighted.
- The text renders in the new font with the slightly tighter spacing.

## TC-9 "Line height" with several texts at different line heights
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains three two-line texts: "Input" at "Tight" (1.0), "Process" at "Normal" (1.25) and "Output" at a typed 2.0.

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Look at the "Line height" control.
5. Under "Line height", click "Loose".

Expected result:
- After step 4, no preset is highlighted and the field is empty or shows "Mixed" (verify which).
- After step 5, all three texts are at line height 1.5 and "Loose" is highlighted.
- The contents and positions of the texts are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font, with line height "Normal" (1.25).

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Under "Line height", click "Loose".
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Enter.
10. Type "line".
11. Press Esc.
12. Click "Second".

Expected result:
- "Second" is created at font size Large in the normal font.
- After step 12, the "Line height" field shows 1.5 and "Loose" is highlighted.
- "First" keeps font size Large in the normal font and line height 1.5.

## TC-10 "Line height" of new text before any line height was chosen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Excalidraw is opened in a browser profile with no site data for it, so no line height has been chosen yet. The canvas is empty.

| Font chosen before typing | Field shows |
|---|---|
| Hand-drawn (Excalifont) | 1.25 |
| A font from the full list with its own line height of 1.2 (verify which) | 1.2 |

One font that uses 1.25 and one that does not, so the default follows the font.

Steps:
1. Press T to choose the text tool.
2. Under "Font family", pick the font from the table.
3. Click an empty area of the canvas.
4. Type "New".
5. Press Enter.
6. Type "text".
7. Press Esc.
8. Click the new text.

Expected result:
- The "Line height" field shows the value from the table.
- "Normal" is highlighted for 1.25; no preset is highlighted for 1.2.

## TC-11 "Line height" changed while the text is being edited
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a three-line text "One / Two / Three" with line height "Normal" (1.25).

Steps:
1. Double-click the text to start editing.
2. Click right after "Two" to place the caret there.
3. Under "Line height", click "Loose".
4. Type "!".
5. Press Esc.

Expected result:
- After step 3, all three lines of the text in the editor use the wider spacing.
- After step 4, the text reads "One / Two! / Three"; the caret stayed after "Two".
- After step 5, the text shows line height 1.5 with "Loose" highlighted when selected.

## TC-12 "Line height" control labels and preset tooltips
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: Interface language is English. The canvas contains one text "Note", selected.

| Item hovered | Tooltip includes |
|---|---|
| "Tight" | 1 |
| "Normal" | 1.25 |
| "Loose" | 1.5 |

Steps:
1. Hover the mouse over the preset from the table.

Expected result:
- The control is labelled "Line height".
- The tooltip names the preset and includes the value from the table (verify exact wording).

## TC-13 "Line height" control in another interface language
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one text "Note".

| Interface language |
|---|
| Deutsch |
| العربية (right-to-left) |

German for long words, Arabic for the right-to-left layout.

Steps:
1. Open the main menu and choose the interface language from the table (verify the menu location).
2. Click "Note".
3. Look at the "Line height" control.
4. Hover over each preset.

Expected result:
- The label and preset names are shown translated, or in English where no translation exists; never empty and never a raw key name.
- Labels fit the panel without overlapping the presets or the number field.
- In Arabic, the control follows the right-to-left layout of the panel.
- Clicking a preset still changes the line height.

## TC-14 "Line height" control in the 375 px mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The browser viewport is 375 px wide, so Excalidraw shows its mobile layout. The canvas contains one two-line text "Alpha / Beta".

Steps:
1. Tap "Alpha / Beta".
2. Open the properties panel.
3. Tap "Loose".
4. Tap the "Line height" number field.
5. Type "2".
6. Confirm the input.

Expected result:
- "Tight", "Normal", "Loose" and the number field are fully visible without horizontal scrolling or overlap.
- After step 3, the text is at line height 1.5.
- After step 6, the field shows 2 and the text spacing widens.

# Text in shapes and on arrows

## TC-15 Line height of text inside a rectangle
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines, at line height "Normal" (1.25).

Steps:
1. Click the rectangle.
2. Under "Line height", click "Loose".
3. Under "Line height", click "Tight".

Expected result:
- After step 2, the lines are spaced wider and the rectangle grows taller; its width stays the same.
- After step 3, the lines are spaced tighter and the rectangle shrinks back to fit the text; its width stays the same.
- No character crosses the rectangle border, and the line breaks are unchanged.

## TC-16 Line height of an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two rectangles joined by an arrow labeled "approved / by lead" on two lines, at line height "Normal" (1.25).

Steps:
1. Click the arrow.
2. Under "Line height", type "2.5" in the number field.
3. Press Enter.
4. Click one of the rectangles.
5. Drag it 150 px down.

Expected result:
- After step 3, the label's lines are spaced wider and the label stays at the middle of the arrow.
- After step 5, the label stays at the middle of the arrow, fully visible, at line height 2.5.

## TC-17 Line height of a sticky note label with auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a sticky note at font size Large whose label "Buy milk / Call Anna / Fix bug / Send report" almost fills the note at line height "Normal" (1.25).

Steps:
1. Click the sticky note.
2. Under "Line height", click "Loose".
3. Under "Line height", click "Normal".

Expected result:
- After step 2, all four lines stay inside the note with wider spacing; the label may be shown smaller to fit.
- After step 3, the label returns to its earlier spacing and size, never larger than font size Large.
- "Large" stays highlighted under "Font size" throughout.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Source / text" at font size Large in the normal font with line height "Loose" (1.5), and a black two-line text "Target / text" at font size Medium in the hand-drawn font with line height "Normal" (1.25).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font.
- "Target" has line height 1.5, and "Loose" is highlighted when it is selected.
- The text of "Target" is unchanged.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Hypothesis H1 / draft" at font size Large with a typed line height of 2.0.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.
3. Click the copy.

Expected result:
- The copy reads "Hypothesis H1 / draft" and is red at font size Large.
- The copy's "Line height" field shows 2 and its line spacing matches the original.
- The original is unchanged.

## TC-18 Undo and redo of a line height change
Action: create
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text "Undo / me" with line height "Normal" (1.25).

Steps:
1. Click "Undo / me".
2. Under "Line height", click "Loose".
3. Under "Line height", type "2" in the number field.
4. Press Enter.
5. Press Ctrl+Z (Cmd+Z on macOS).
6. Press Ctrl+Z (Cmd+Z on macOS).
7. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 5, the text is at line height 1.5 and "Loose" is highlighted.
- After step 6, the text is at line height 1.25 and "Normal" is highlighted.
- After step 7, the text is at line height 1.5 and "Loose" is highlighted.
- The text content and position stay the same throughout.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Survives / reload" at font size Large in the normal font, with line height "Loose" (1.5).

Steps:
1. Reload the browser tab.
2. Click "Survives / reload".

Expected result:
- "Survives / reload" is still red, at font size Large, in the normal font, at the same position.
- The line spacing is unchanged, the "Line height" field shows 1.5 and "Loose" is highlighted.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Saved / style" at font size Large in the normal font, with a typed line height of 2.0.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved / style".

Expected result:
- "Saved / style" is red, at font size Large, in the normal font, at the same position.
- The line spacing is the same as before saving and the "Line height" field shows 2.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. Among them are three-line texts at line height 0.8, "Loose" (1.5) and 2.5, and a rectangle holding three lines of text at "Loose".

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- Each text has the same spacing between lines as on the canvas, and the rectangle has the same height.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a text in the hand-drawn font and a three-line text in the normal font with a typed line height of 2.0. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The three-line text has the same spacing between lines as on the canvas.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black two-line text "Shared / note" at line height "Normal" (1.25).

Steps:
1. As user A, click "Shared / note".
2. As user A, under "Stroke", click the red color.
3. As user A, under "Line height", click "Loose".
4. As user B, look at "Shared / note".
5. As user B, click "Shared / note".

Expected result:
- User B sees "Shared / note" in red with the wider line spacing without reloading.
- After step 5, user B's "Line height" field shows 1.5 and "Loose" is highlighted.