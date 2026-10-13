# Change set: excalidraw#99002

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T09:49:42.737Z (fingerprint 15c81f0c8add).

Scope: line height control for text (desktop Chrome, Firefox and Safari, plus the mobile layout at 375 px). To read an exact line height, select the text and read the value in the "Line height" field. Presets are "Tight" = 1.0, "Normal" = 1.25 and "Loose" = 1.5; the range is 0.8 to 2.5 with step 0.05.

# Text properties

## C-001 Font family: changing the font of a text element
Action: update C-001
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text element "Flowchart step / second line" in the hand-drawn font, at line height "Loose" (1.5).

Steps:
1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.
- "Line height" still shows 1.5 with "Loose" highlighted, and the gap between the two lines stays as wide as before.

## TC-1 "Line height" presets on a multi-line text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text element "Line one / Line two / Line three" in the hand-drawn font at font size Medium, with its line height never changed (1.25).

| Preset clicked | Value in the field | Gap between lines compared with "Normal" |
|---|---|---|
| "Tight" | 1.0 | smaller |
| "Loose" | 1.5 | larger |
| "Normal" | 1.25 | the same |

All three presets are covered; "Normal" last confirms the return to the font's default.

Steps:
1. Click the text element.
2. Under "Line height", click the preset from the row.

Expected result:
- The clicked preset is highlighted, and no other preset is highlighted.
- The "Line height" field shows the value from the row.
- The gaps between all three lines change as the row says, evenly for every line.
- The selection box height follows the new text height.
- The text content, font, font size, color and alignment are unchanged.

## TC-2 "Line height" field: typed values within the range
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #99002

Preconditions: The canvas contains one two-line text element "Typed / value" at line height "Normal" (1.25).

| Typed value | Field shows | Highlighted preset |
|---|---|---|
| 0.8 | 0.8 | none |
| 2.5 | 2.5 | none |
| 1.6 | 1.6 | none |
| 1,75 | 1.75 | none |
| 1.5 | 1.5 | "Loose" |

The two range limits, an ordinary value on the step, a decimal comma, and a typed value that equals a preset.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the current value.
4. Type the value from the row.
5. Press Enter.

Expected result:
- The field shows the value from the row.
- The preset from the row is highlighted, or no preset is highlighted when the row says "none".
- The gap between the two lines changes to match the new value: smaller than at 1.25 for 0.8, larger for the other rows.

## TC-3 "Line height" field: values outside the range or between steps
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #99002

Preconditions: The canvas contains one two-line text element "Clamp / test" at line height "Normal" (1.25).

| Typed value | Field shows | Highlighted preset |
|---|---|---|
| 0.5 | 0.8 | none |
| 0.79 | 0.8 | none |
| 2.51 | 2.5 | none |
| 3 | 2.5 | none |
| 1.33 | 1.35 | none |
| 1.12 | 1.1 | none |
| 1.02 | 1.0 | "Tight" |

Values just outside and far outside both limits, values that round up and round down, and a value that rounds onto a preset.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the current value.
4. Type the value from the row.
5. Press Enter.

Expected result:
- The field shows the value from the "Field shows" column.
- The text renders at that line height.
- The preset from the row is highlighted, or no preset is highlighted when the row says "none".
- No error message appears.

## TC-4 "Line height" field: empty and non-numeric input
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99002

Preconditions: The canvas contains one two-line text element "Keep / value" at line height "Loose" (1.5).

| Input |
|---|
| (empty field) |
| abc |
| - |

An empty field, letters, and a lone sign character that is not a number.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the current value and delete it.
4. Type the input from the row (type nothing for the empty row).
5. Press Enter.

Expected result:
- The field shows 1.5 again, and "Loose" is highlighted.
- The gap between the two lines is unchanged.
- No error message appears, and the text stays selected.

## TC-5 Existing texts show their font's own line height
Action: create
Area: Text properties
Priority: Medium · Type: regression
Tags: #99002

Preconditions: A .excalidraw file saved before line height control was released contains two two-line texts: "Hand / drawn" in the hand-drawn font (Excalifont), and "Other / font" in a font from the full font list whose line height is 1.15 (verify which font).

| Text clicked | Field shows | Highlighted preset |
|---|---|---|
| "Hand / drawn" | 1.25 | "Normal" |
| "Other / font" | 1.15 | none |

A quick-choice font that matches a preset, and a full-list font whose own line height matches no preset.

Steps:
1. Open the main menu and choose "Open".
2. Pick the file.
3. Click the text from the row.

Expected result:
- The line spacing of both texts looks the same as before the release.
- The "Line height" field shows the value from the row.
- The preset from the row is highlighted, or no preset is highlighted when the row says "none".

## TC-6 Font family change on a text whose line height was never changed
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text "Follow / the font" in the hand-drawn font. Its line height was never changed, so the field shows 1.25.

Steps:
1. Click the text.
2. Under "Font family", open the list with more fonts.
3. Click a font whose own line height is 1.15 (verify which font).

Expected result:
- The text renders in the chosen font.
- The "Line height" field shows 1.15, and no preset is highlighted.
- The gap between the two lines is slightly smaller than before.

## TC-7 "Line height" control: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside it, and an arrow labeled "yes".

| Action in step 1 |
|---|
| Click "Plain" |
| Click the rectangle with "Boxed" |
| Click the arrow labeled "yes" |
| Press Esc, then press T to choose the Text tool |

Each kind of element that holds text, and the Text tool with nothing selected.

Steps:
1. Do the action from the row.
2. Look at the properties panel.

Expected result:
- The properties panel shows a "Line height" control with the presets "Tight", "Normal" and "Loose" and a field for typing a value.
- For a selected element, the field shows that element's text line height.

## TC-8 "Line height" control: not shown without text
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #99002

Preconditions: The canvas contains a rectangle with no text and an arrow with no label.

| Action in step 1 |
|---|
| Click the rectangle with no text |
| Click the arrow with no label |
| Press R to choose the Rectangle tool (verify shortcut) |

A shape and an arrow that could hold text but hold none, and a non-text tool.

Steps:
1. Do the action from the row.
2. Look at the properties panel.

Expected result:
- The properties panel shows no "Line height" control.

## TC-9 Several texts with different line heights
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two two-line texts: "Alpha / one" at line height "Tight" (1.0) and "Beta / two" at line height "Loose" (1.5).

Steps:
1. Click "Alpha".
2. Shift+click "Beta".
3. Look at the "Line height" control.
4. Under "Line height", click "Normal".
5. Click the "Line height" field.
6. Type "2".
7. Press Enter.

Expected result:
- After step 3, no preset is highlighted and the "Line height" field is empty.
- After step 4, both texts are at line height 1.25 and "Normal" is highlighted.
- After step 7, both texts are at line height 2 and no preset is highlighted.
- The contents and positions of both texts are unchanged throughout.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font, with its line height never changed.

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
- "Second" has line height 1.5: the "Line height" field shows 1.5 and "Loose" is highlighted.
- "First" keeps font size Large, the normal font and line height 1.5.

## TC-10 New text before any line height is chosen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Excalidraw is open in a private browser window with no saved Excalidraw data, and no line height has been chosen in this window.

| Font chosen in step 2 | Field shows | Highlighted preset |
|---|---|---|
| "Hand-drawn" | 1.25 | "Normal" |
| A font from the full list whose line height is 1.15 (verify which font) | 1.15 | none |

A quick-choice font, and a full-list font whose own line height differs from every preset.

Steps:
1. Press T to choose the text tool.
2. Under "Font family", choose the font from the row.
3. Click an empty area of the canvas.
4. Type "New".
5. Press Enter.
6. Type "text".
7. Press Esc.
8. Click "New".

Expected result:
- The "Line height" field shows the value from the row.
- The preset from the row is highlighted, or no preset is highlighted when the row says "none".

## TC-11 Editing a text with a custom line height
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Edit / me" at line height 2.

Steps:
1. Double-click "Edit".
2. Place the caret at the end of "me".
3. Press Enter.
4. Type "again".
5. Press Esc.

Expected result:
- While editing, the gaps between the lines look the same as on the finished text, and the new third line has the same gap.
- After step 5, the text does not move or jump, and its lines stay where they were during editing.
- The "Line height" field still shows 2.

## TC-12 Line height on mixed-script text
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element with three lines: "مرحبا بالعالم", "Привет, ёжик" and "Notes 📝✅".

| Typed value |
|---|
| 0.8 |
| 2.5 |

The two range limits, where clipping or misplaced lines are most likely.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the current value.
4. Type the value from the row.
5. Press Enter.
6. Press Esc.

Expected result:
- All three lines are shown in their original order.
- The Arabic line reads right to left.
- Emoji and accented Cyrillic letters (ё) are fully visible: none is cut off at the top or bottom of the text element.
- The selection box, shown when the text is clicked, encloses all three lines.

## TC-13 "Line height" control in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: Excalidraw is open in the browser's device mode at 375 px width, so the mobile layout is shown (verify how to open device mode). The canvas contains a two-line text "Phone / note".

Steps:
1. Tap the text.
2. Open the properties panel for the selected element (verify the button).
3. Tap "Loose" under "Line height".

Expected result:
- The "Line height" control, its three presets and the field are fully visible without horizontal scrolling, and nothing overlaps.
- After step 3, "Loose" is highlighted and the gap between the two lines is larger.

# Text in shapes and on arrows

## TC-14 Line height of text inside a rectangle
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
- After step 2, the gaps between the wrapped lines are larger, and the rectangle grows taller while its width stays the same.
- After step 3, the gaps are smaller than at "Normal", and the rectangle is shorter than after step 2 while its width stays the same.
- After each step, the text stays centered in the rectangle and no character crosses the rectangle border.
- The line breaks and the rectangle's stroke and fill are unchanged.

## TC-15 Line height of an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two rectangles joined by an arrow with the two-line label "yes / confirmed", at line height "Normal" (1.25).

Steps:
1. Click the arrow.
2. Under "Line height", click "Loose".

Expected result:
- The gap between "yes" and "confirmed" is larger.
- The label stays at the middle of the arrow and remains fully visible.
- The arrow's shape and its connections to both rectangles are unchanged.

## TC-16 Line height of a sticky note label with auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a sticky note whose label is font size "Very large" with five lines of text that just fill the note, at line height "Normal" (1.25).

Steps:
1. Click the sticky note.
2. Click the "Line height" field.
3. Select the current value.
4. Type "2.5".
5. Press Enter.

Expected result:
- The gaps between the lines are larger.
- The label is shown smaller so that every line fits inside the note, and no line overflows the note's border.
- The "Line height" field shows 2.5.
- "Very large" stays highlighted under "Font size".

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Source / one" at font size Large in the normal font, at line height "Loose" (1.5), and a black two-line text "Target / two" at font size Medium in the hand-drawn font, at line height "Normal" (1.25).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font.
- "Target" has line height 1.5: "Loose" is highlighted and the gap between its lines matches "Source".
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text element "Undo me / second line" at font size Medium, at line height "Normal" (1.25).

| Change in step 2 | State after undo | State after redo |
|---|---|---|
| Under "Font size", click "Large" | font size Medium | font size Large |
| Under "Line height", click "Loose" | line height 1.25, "Normal" highlighted | line height 1.5, "Loose" highlighted |

The existing font size change, plus the new line height change.

Steps:
1. Click "Undo me".
2. Make the change from the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is in the "State after undo" from the row after a single undo.
- After step 4, "Undo me" is in the "State after redo" from the row.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Hypothesis H1 / draft" at font size Large, at line height "Loose" (1.5).

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
- The copy has line height 1.5, and "Loose" is highlighted.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Survives reload / line two" at font size Large in the normal font, at line height "Loose" (1.5).

Steps:
1. Reload the browser tab.
2. Click "Survives reload".

Expected result:
- "Survives reload" is still red, at font size Large, in the normal font, at the same position.
- The "Line height" field shows 1.5, "Loose" is highlighted, and the gap between the lines is the same as before the reload.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Saved style / line two" at font size Large in the normal font, at line height "Loose" (1.5).

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved style".

Expected result:
- "Saved style" is red, at font size Large, in the normal font, at the same position.
- The "Line height" field shows 1.5, "Loose" is highlighted, and the gap between the lines is the same as before saving.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, including a three-line text at line height "Tight" (1.0) and a three-line text at line height "Loose" (1.5).

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The gaps between lines of the "Tight" and "Loose" texts are the same as on the canvas.
- No character is cut off at the image edges.

## TC-17 SVG export keeps the line spacing of texts
Action: create
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a three-line text "One / Two / Three" at line height "Tight" (1.0) and a three-line text "Four / Five / Six" at line height 2.5.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the downloaded SVG in a browser.

Expected result:
- Both texts have the same gaps between lines as on the canvas.
- The line breaks and line order are the same as on the canvas.
- No character is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black two-line text "Shared note / line two" at line height "Normal" (1.25).

| Change by user A in step 2 | What user B sees |
|---|---|
| Under "Stroke", click the red color | "Shared note" in red |
| Under "Line height", click "Loose" | a larger gap between the two lines of "Shared note" |

The existing color change, plus the new line height change.

Steps:
1. As user A, click "Shared note".
2. As user A, make the change from the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees what the row says without reloading.