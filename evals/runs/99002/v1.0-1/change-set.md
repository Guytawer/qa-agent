# Change set: excalidraw#99002

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:50:55.459Z (fingerprint 83398efcba6b).

Scope: Excalidraw web app on desktop browsers (Chrome, Firefox, Safari) plus the 375 px mobile layout in TC-10. Read exact line heights in the number field of the "Line height" section of the properties panel. Line height values are Tight = 1.0, Normal = 1.25 and Loose = 1.5, with a range of 0.8 to 2.5 and a step of 0.05.

# Text properties

## C-001 Font family: changing the font of a text element
Action: update C-001
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text element "Flowchart step" ("Flowchart" / "step") in the hand-drawn font, at line height "Loose" (1.5).

Steps:
1. Click "Flowchart step".
2. In the properties panel, under "Font family", click the "Normal" font.

Expected result:
- The text renders in the normal sans-serif font.
- The text content, size, color and position are unchanged.
- The selection box resizes to fit the new font.
- The "Line height" field still shows 1.5 and "Loose" is highlighted; the gap between the two lines stays proportionally the same.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font, at line height "Normal" (1.25).

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
- "Second" is created at font size Large in the normal font.
- The "Line height" field shows 1.5 for "Second" and "Loose" is highlighted.
- "First" keeps font size Large in the normal font, at line height 1.5.

## TC-1 "Line height" presets on a multi-line text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text element "Alpha" / "Beta" / "Gamma" in the hand-drawn font at font size Medium, at line height "Normal" (1.25). Note its top-left corner and width.

| Preset clicked | Field shows | Gap between lines compared with Normal |
|---|---|---|
| Tight | 1 | smaller |
| Loose | 1.5 | larger |
| Normal (after Loose) | 1.25 | same as at the start |

All three presets are covered; the last row checks the way back to the default value.

Steps:
1. Click the text element.
2. Under "Line height", click the preset from the row.

Expected result:
- The gap between the lines changes as the table says, and every line keeps its text and order.
- The "Line height" field shows the value from the table, and only the clicked preset is highlighted.
- The selection box height changes with the line gap; its top-left corner and its width stay the same.
- Font family, font size and color are unchanged.

## TC-2 "Line height" field: typed values, rounding and clamping
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #99002

Preconditions: The canvas contains one three-line text element "Alpha" / "Beta" / "Gamma" at line height "Normal" (1.25).

| Typed | Field shows after Enter | Highlighted preset |
|---|---|---|
| 0.8 | 0.8 | none |
| 2.5 | 2.5 | none |
| 1.33 | 1.35 | none |
| 1.67 | 1.65 | none |
| 1,5 | 1.5 | Loose |
| 1.25 | 1.25 | Normal |
| 0.5 | 0.8 | none |
| 3 | 2.5 | none |

The values are both limits, rounding up and down to the step, a comma decimal, an exact preset value, and one value below and one above the range.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the whole field content with Ctrl+A (Cmd+A on macOS).
4. Type the value from the row.
5. Press Enter.

Expected result:
- The field shows the value from the "Field shows after Enter" column.
- The preset from the "Highlighted preset" column is highlighted; with "none", no preset is highlighted.
- The text renders with the line gap of the shown value; its content is unchanged.

## TC-3 "Line height" field: empty, non-numeric and cancelled input
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99002

Preconditions: The canvas contains one three-line text element "Alpha" / "Beta" / "Gamma" at line height "Loose" (1.5).

| Typed after clearing the field | Key pressed |
|---|---|
| (nothing) | Enter |
| abc | Enter |
| 2 | Esc |

The rows cover an empty field, non-numeric input and a valid value cancelled with Esc.

Steps:
1. Click the text element.
2. Click the "Line height" field.
3. Select the whole field content with Ctrl+A (Cmd+A on macOS).
4. Press Delete.
5. Type the text from the row.
6. Press the key from the row.

Expected result:
- The field shows 1.5 again and "Loose" is highlighted.
- The line gap of the text is unchanged.
- The text content is unchanged.

## TC-4 "Line height" section visibility by selection
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Note" / "two", a rectangle with the text "Start" inside it, and two rectangles joined by an arrow labeled "yes". All texts are at line height "Normal" (1.25).

| Selected element |
|---|
| The text "Note" |
| The rectangle with "Start" |
| The arrow labeled "yes" |

The rows cover a standalone text, text inside a shape and an arrow label.

Steps:
1. Click the element from the row.
2. Look at the properties panel.

Expected result:
- The properties panel shows the "Line height" section with "Tight", "Normal", "Loose" and the number field.
- The field shows 1.25 and "Normal" is highlighted.

## TC-5 Font's own line height before any value is chosen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The site's browser storage is cleared, so no line height has been chosen yet. The canvas is empty.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type "Default font".
4. Press Esc.
5. Click "Default font".
6. Note the "Line height" field and presets.
7. Press Esc.
8. Press T to choose the text tool.
9. Under "Font family", open the font list and pick a font whose own line height is 1.15 (verify which font; ask the developer).
10. Click another empty area of the canvas.
11. Type "Other font".
12. Press Esc.
13. Click "Other font".

Expected result:
- After step 6, the field shows 1.25 and "Normal" is highlighted (the hand-drawn font's own line height).
- After step 13, the field shows 1.15 and no preset is highlighted.

## TC-6 Several texts with different line heights
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two two-line texts: "Input" / "data" at line height "Tight" (1.0) and "Process" / "step" at line height "Loose" (1.5).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Look at the "Line height" section.
4. Under "Line height", click "Normal".
5. Click an empty area of the canvas.
6. Click "Input".
7. Click an empty area of the canvas.
8. Click "Process".

Expected result:
- After step 3, the field shows "Mixed" and no preset is highlighted.
- After step 4, both texts render with the same line gap and "Normal" is highlighted.
- After steps 6 and 8, each text's field shows 1.25.
- The contents and positions of both texts are unchanged.

## TC-7 Line height change while a text is being edited
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text "Draft" / "notes" at line height "Normal" (1.25).

Steps:
1. Double-click "Draft" to start editing.
2. Click at the end of "notes" to place the caret there.
3. Under "Line height", click "Loose".
4. Type " more".
5. Press Esc.
6. Click the text.

Expected result:
- After step 3, the gap between the two lines widens at once while the text is still in edit mode.
- After step 4, " more" is added at the end of the second line.
- After step 6, the text reads "Draft" / "notes more", the field shows 1.5 and "Loose" is highlighted.

## TC-8 Line height of a single-line text
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one single-line text "Solo" at line height "Normal" (1.25). Note its top-left corner and the selection box size.

Steps:
1. Click "Solo".
2. Under "Line height", click "Loose".

Expected result:
- The selection box is taller than before; its width is unchanged.
- The top-left corner of the text stays in place.
- The field shows 1.5 and "Loose" is highlighted.

## TC-9 "Line height" labels in another interface language
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text "Note" / "two".

| Interface language |
|---|
| Deutsch |
| العربية (Arabic) |

German has long words and Arabic uses a right-to-left layout.

Steps:
1. Open the main menu and choose the interface language from the row in the language selector (verify the selector's place).
2. Click the text.
3. Hover over "Tight", "Normal" and "Loose" under "Line height".

Expected result:
- The section label and the preset labels and tooltips read "Line height", "Tight", "Normal" and "Loose" in English; none is empty or a raw key name.
- The labels, presets and field do not overlap and are not cut off.

## TC-10 "Line height" section in the 375 px mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The browser viewport is 375 px wide, so the mobile layout is shown. The canvas contains one two-line text "Note" / "two" at line height "Normal" (1.25).

Steps:
1. Tap the text.
2. Open the properties panel (verify the mobile button for it).
3. Scroll the panel to the "Line height" section.
4. Tap "Loose".

Expected result:
- "Tight", "Normal", "Loose" and the number field are fully visible without horizontal scrolling and do not overlap.
- After step 4, the field shows 1.5, "Loose" is highlighted and the text's line gap widens.

# Text in shapes and on arrows

## TC-11 Line height of text inside a rectangle
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines, at line height "Normal" (1.25). The rectangle's height was set by the text growing it. Note the rectangle's width and height.

| Preset clicked | Rectangle height compared with the start |
|---|---|
| Loose | taller |
| Tight | shorter |

Steps:
1. Click the rectangle.
2. Under "Line height", click the preset from the row.

Expected result:
- The line gap of the text changes and the rectangle height changes as the table says.
- The rectangle width and the line breaks stay the same.
- No character crosses the rectangle border, and the text stays centered in it.
- The field shows the clicked preset's value and that preset is highlighted.

## TC-12 Line height of an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two rectangles joined by an arrow with the two-line label "yes" / "confirmed" at line height "Normal" (1.25).

Steps:
1. Click the arrow.
2. Under "Line height", click "Loose".

Expected result:
- The gap between "yes" and "confirmed" widens.
- The label stays at the middle of the arrow and remains fully visible.
- The arrow's path and its connections to the rectangles are unchanged.

## TC-13 Line height of a sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a sticky note created with the "Sticky note" tool, at font size Large, with a label long enough to fill the note: "Review the onboarding flow with the design team before Friday". The label is at line height "Normal" (1.25).

Steps:
1. Click the sticky note.
2. Under "Line height", click "Loose".

Expected result:
- The line gap of the label widens and every character stays inside the note.
- Under "Font size", "Large" stays highlighted, even when the label is shown smaller to fit.
- The field shows 1.5 and "Loose" is highlighted.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Source" / "text" at font size Large in the normal font, at line height "Loose" (1.5), and a black two-line text "Target" / "text" at font size Medium in the hand-drawn font, at line height "Tight" (1.0).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font.
- The "Line height" field of "Target" shows 1.5, "Loose" is highlighted, and its line gap matches "Source".
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text element "Undo me" ("Undo" / "me") at font size Medium, at line height "Normal" (1.25).

Steps:
1. Click "Undo me".
2. Under "Font size", click "Large".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).
5. Under "Line height", click "Loose".
6. Press Ctrl+Z (Cmd+Z on macOS).
7. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo.
- After step 4, "Undo me" is at Large again.
- After step 6, the line gap is back to its earlier size after a single undo, the field shows 1.25 and "Normal" is highlighted; the font size stays Large.
- After step 7, the field shows 1.5 and "Loose" is highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Hypothesis H1" ("Hypothesis" / "H1") at font size Large, at line height "Loose" (1.5).

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
- The copy reads "Hypothesis H1" and is red at font size Large.
- The copy's "Line height" field shows 1.5 and "Loose" is highlighted.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Survives reload" ("Survives" / "reload") at font size Large in the normal font, at line height "Loose" (1.5).

Steps:
1. Reload the browser tab.
2. Click "Survives reload".

Expected result:
- "Survives reload" is still red, at font size Large, in the normal font, at the same position.
- The "Line height" field shows 1.5, "Loose" is highlighted, and the line gap is the same as before the reload.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Saved style" ("Saved" / "style") at font size Large in the normal font, at line height "Loose" (1.5).

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved style".

Expected result:
- "Saved style" is red, at font size Large, in the normal font, at the same position.
- The "Line height" field shows 1.5, "Loose" is highlighted, and the line gap is the same as before saving.

## C-016 Text in PNG and SVG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. It also contains a two-line text "Tight" / "lines" at line height "Tight" (1.0) and a two-line text "Loose" / "lines" at line height "Loose" (1.5).

| Format |
|---|
| PNG |
| SVG |

Steps:
1. Open the main menu and choose "Export image...".
2. Click the format from the row.
3. Open the downloaded file in a browser.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The gap between lines of "Tight" / "lines" and "Loose" / "lines" matches the canvas.
- No character is cut off at the image edges.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black two-line text "Shared note" ("Shared" / "note") at line height "Normal" (1.25).

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user B, look at "Shared note".
4. As user A, under "Line height", click "Loose".
5. As user B, look at "Shared note".

Expected result:
- After step 3, user B sees "Shared note" in red without reloading.
- After step 5, user B sees the gap between "Shared" and "note" widen to match user A's canvas, without reloading.