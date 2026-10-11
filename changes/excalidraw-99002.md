# Change set: excalidraw#99002

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-11T14:44:52.883Z (fingerprint 33c72886f2ae).

Scope: latest Chrome, Firefox and Safari on desktop, plus the mobile layout at 375 px width; English locale unless a case says otherwise. Exact values: the line height is read from the line height field of the "Line height" control; font size from the "F" field and element height from the "H" field (verify) of the "Properties" panel (Alt+/), at 100% zoom. Expected heights assume text height = number of lines × font size × line height (verify).

# Text properties

## TC-1 "Line height" presets on a multi-line text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text "Alpha / Beta / Gamma" at font size Medium (20) in the normal font. The "Properties" panel (Alt+/) is open.

| Preset | Line height field shows | "H" field shows |
|---|---|---|
| "Tight" | 1.0 | 60 |
| "Normal" | 1.25 | 75 |
| "Loose" | 1.5 | 90 |

All three presets, with the values set by the product owner.

Steps:
1. Click "Alpha / Beta / Gamma".
2. Under "Line height", click the preset from the row.

Expected result:
- The preset from the row is highlighted; the other two presets are not.
- The line height field shows the value from the row.
- The "H" field shows the height from the row, and the gaps between the three lines are equal.
- The text content, line breaks, font size and font family are unchanged.

## TC-2 Line height field: typed values, rounding and bounds
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #99002

Preconditions: The canvas contains one three-line text "Alpha / Beta / Gamma" at font size Medium (20) in the normal font, at line height "Normal" (1.25). The "Properties" panel (Alt+/) is open.

| Typed value | Field shows | Highlighted preset | "H" field shows |
|---|---|---|---|
| 0.8 | 0.8 | none | 48 |
| 0.79 | 0.8 | none | 48 |
| 0.5 | 0.8 | none | 48 |
| 2.5 | 2.5 | none | 150 |
| 2.51 | 2.5 | none | 150 |
| 3 | 2.5 | none | 150 |
| 1.23 | 1.25 | "Normal" | 75 |
| 1.22 | 1.2 | none | 72 |
| 1.75 | 1.75 | none | 105 |
| 1 | 1.0 | "Tight" | 60 |

Both bounds and values just and far outside them, rounding up and down to the 0.05 step, a value between presets, and a typed value equal to a preset. Values are compared as numbers (1.0 may be shown as "1").

Steps:
1. Click "Alpha / Beta / Gamma".
2. Click into the line height field.
3. Press Ctrl+A (Cmd+A on macOS).
4. Type the value from the row.
5. Press Enter (verify).

Expected result:
- The line height field shows the value from the row.
- The preset from the row is highlighted; "none" means no preset is highlighted.
- The "H" field shows the height from the row.

## TC-3 Line height field: empty and non-numeric entry
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99002

Preconditions: The canvas contains one three-line text "Alpha / Beta / Gamma" at font size Medium (20) in the normal font, at line height "Loose" (1.5). The "Properties" panel (Alt+/) is open.

| Entry |
|---|
| empty field (press Delete instead of typing) |
| "abc" |
| "-" |
| " " (one space) |

An empty field, letters, a lone minus sign and whitespace.

Steps:
1. Click "Alpha / Beta / Gamma".
2. Click into the line height field.
3. Press Ctrl+A (Cmd+A on macOS).
4. Enter the entry from the row.
5. Press Enter (verify).

Expected result:
- The line height field shows 1.5 again.
- "Loose" is still highlighted.
- The "H" field still shows 90 and the line spacing is unchanged.

## TC-4 "Line height" control: where it is shown, labels and tooltips
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "Plan / Do", a rectangle with the text "Start" inside it, and two rectangles joined by an arrow labelled "yes". Nothing is selected.

| State | How to reach it |
|---|---|
| a standalone text is selected | click "Plan / Do" |
| a shape with text is selected | click the rectangle with "Start" |
| an arrow with a label is selected | click the arrow labelled "yes" |
| the Text tool is active | press T |

The four states in which the product owner decided the control is shown.

Steps:
1. Reach the state from the row.
2. Hover over "Tight".
3. Hover over "Normal".
4. Hover over "Loose".

Expected result:
- After step 1, the panel shows a "Line height" control with the presets "Tight", "Normal" and "Loose" and a line height field next to them.
- The tooltips read "Tight", "Normal" and "Loose", with no keyboard shortcut.

## TC-5 "Line height" control: hidden for elements without text
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #99002

Preconditions: The canvas contains a rectangle with no text and two rectangles joined by an arrow with no label. Nothing is selected.

| Element to click |
|---|
| the rectangle with no text |
| the arrow with no label |

A shape and an arrow, the two kinds of element that can hold text, both without text.

Steps:
1. Click the element from the row.

Expected result:
- The panel shows no "Line height" control.

## TC-6 Existing text: line spacing unchanged after the update
Action: create
Area: Text properties
Priority: High · Type: regression
Tags: #99002

Preconditions: A file "before-line-height.excalidraw" was saved with the version without line height. It contains three three-line texts "Alpha / Beta / Gamma" at font size Medium, one in each font from the table, and a rectangle with wrapped text. A screenshot of that canvas at 100% zoom, taken in the old version, is at hand.

| Font | Line height field shows (verify) | Highlighted preset |
|---|---|---|
| Hand-drawn (Excalifont) | 1.25 | "Normal" |
| Normal (Nunito) | 1.35 | none |
| Code (Comic Shanns) | 1.25 | "Normal" |

The three quick font choices, which may each have their own line height.

Steps:
1. Open the main menu and choose "Open".
2. Pick "before-line-height.excalidraw".
3. Set the zoom to 100%.
4. Click the text in the font from the row.

Expected result:
- Every text and the rectangle match the screenshot: same line breaks, same gaps between lines, same rectangle height.
- The line height field shows the value from the row.
- The preset from the row is highlighted; "none" means no preset is highlighted.

## TC-7 Several texts with different line heights selected
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a two-line text "One / 1" at line height "Tight" and a two-line text "Two / 2" at line height "Loose", both at font size Medium (20) in the normal font. The "Properties" panel (Alt+/) is open.

| Change in step 3 | Field shows | Highlighted preset | "H" of each text |
|---|---|---|---|
| Under "Line height", click "Normal" | 1.25 | "Normal" | 50 |
| Type 1.75 in the line height field and press Enter | 1.75 | none | 70 |

Both ways of setting the value: a preset and a typed value that matches no preset.

Steps:
1. Click "One / 1".
2. Shift+click "Two / 2".
3. Make the change from the row.

Expected result:
- After step 2, no preset is highlighted and the line height field is empty.
- After step 3, the field shows the value from the row and the preset from the row is highlighted; "none" means no preset is highlighted.
- After step 3, both texts have the same line spacing, and the "H" field shows the height from the row for each of them.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: A new private browser window shows an empty canvas; no line height has been chosen in it. The text style is font size Medium in the hand-drawn font.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type "First".
4. Press Esc.
5. Click "First".
6. Under "Font size", click "Large".
7. Under "Font family", click the "Normal" font.
8. Under "Line height", click "Loose".
9. Press Esc.
10. Press T to choose the text tool.
11. Click an empty area of the canvas.
12. Type "Second".
13. Press Esc.
14. Click "Second".

Expected result:
- After step 5, the line height field shows the hand-drawn font's own line height, 1.25 (verify).
- After step 14, "Second" is at font size Large in the normal font, the line height field shows 1.5 and "Loose" is highlighted.
- "First" keeps font size Large, the normal font and line height 1.5.

## TC-8 Line height on single-line text
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The canvas contains one single-line text "Solo" at font size Medium (20) in the normal font, at line height "Normal". The "Properties" panel (Alt+/) is open.

Steps:
1. Click "Solo".
2. Under "Line height", click "Loose".

Expected result:
- "Loose" is highlighted and the line height field shows 1.5.
- The "H" field changes from 25 to 30.
- "Solo" stays on one line, with the same characters, font size and width.

## TC-9 Text editor: line spacing matches the canvas
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text "Alpha / Beta / Gamma" at font size Medium in the normal font, at the line height from the table. The zoom is 100%.

| Line height |
|---|
| "Loose" (1.5) |
| "Tight" (1.0) |
| 2.5 (typed) |

The largest and smallest presets, and the maximum value, where a mismatch between editor and canvas would be largest.

Steps:
1. Double-click "Alpha / Beta / Gamma".
2. Press Ctrl+End (Cmd+Down on macOS).
3. Press Enter.
4. Type "Delta".
5. Press Esc.

Expected result:
- After step 1, the three lines stay at the same positions as before the double-click.
- After step 4, "Delta" is a fourth line with the same gap as between the other lines.
- After step 5, all four lines stay where they were in the editor; nothing jumps.

## TC-10 Line height kept when the font size changes
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains one three-line text "Alpha / Beta / Gamma" at font size Medium (20) in the normal font, at line height "Loose" (1.5). The "Properties" panel (Alt+/) is open.

| Font size change | "F" field shows | "H" field shows |
|---|---|---|
| Under "Font size", click "Very large" | 36 | 162 |
| Under "Font size", click "Small" | 16 | 72 |
| Press Ctrl+Shift+> (Cmd+Shift+> on macOS) once | 22 | 99 |

The largest and smallest presets, and the shortcut, which gives a size between presets.

Steps:
1. Click "Alpha / Beta / Gamma".
2. Make the font size change from the row.

Expected result:
- "Loose" is still highlighted and the line height field shows 1.5.
- The "F" and "H" fields show the values from the row.
- The gaps between lines grow or shrink in proportion to the font size.

## TC-11 "Line height" control in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The browser window is 375 px wide and shows the mobile layout. The canvas contains one three-line text "Alpha / Beta / Gamma" at line height "Normal".

Steps:
1. Tap "Alpha / Beta / Gamma".
2. Open the style options (verify how in the mobile layout).
3. Tap "Loose".
4. Tap the line height field.
5. Type 2.
6. Tap outside the field.

Expected result:
- After step 2, the "Line height" label, the three presets and the field are all visible, without horizontal scrolling and without overlapping other controls.
- After step 3, "Loose" is highlighted, the field shows 1.5 and the lines move apart.
- After step 6, the field shows 2 and no preset is highlighted.

## TC-12 "Line height" labels in another locale
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99002

Preconditions: The language is set to Deutsch in the main menu's language picker (verify). The canvas contains one two-line text "Plan / Do".

Steps:
1. Click "Plan / Do".
2. Hover over each of the three line height presets.

Expected result:
- The "Line height" control label and the three presets show readable text, never an empty label.
- Each preset tooltip shows readable text, never an empty tooltip.

# Text in shapes and on arrows

## TC-13 Line height of text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, at font size Medium, line height "Normal", wrapped onto several lines. The "Properties" panel (Alt+/) is open; note the rectangle's height.

Steps:
1. Click the rectangle.
2. Under "Line height", click "Loose".
3. Under "Line height", click "Normal".
4. Under "Line height", click "Tight".

Expected result:
- After step 2, the lines are further apart, the line breaks are unchanged, the rectangle is taller and its width is the same.
- After step 3, the rectangle is back at its noted height and the text looks as at the start.
- After step 4, the lines are closer together, the line breaks are unchanged and the rectangle's width is the same.
- After every step, no character crosses the rectangle border, and the rectangle's stroke and fill are unchanged.

## TC-14 Line height of an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains two rectangles joined by a straight arrow with the two-line label "yes / no" at font size Medium, line height "Normal".

Steps:
1. Click the arrow.
2. Under "Line height", click "Loose".
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the two label lines are further apart and the label stays at the middle of the arrow, fully visible.
- After step 4, the arrow stays connected, and the label stays at the middle of the arrow with the "Loose" spacing.

## TC-15 Line height of a sticky note label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, labelled with five lines "Agenda / Budget / Hiring / Roadmap / Risks" at font size Large, line height "Normal", filling most of the note.

Steps:
1. Click the sticky note.
2. Under "Line height", click "Loose".
3. Under "Line height", click "Tight".

Expected result:
- After step 2, all five lines are inside the note, none clipped; the label may be shown smaller to fit, never larger than at the start.
- After step 3, the lines are closer together and the label is never shown larger than at the start.
- After every step, "Large" stays highlighted under "Font size" and the note's width and height are unchanged.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Source / A" at font size Large in the normal font, at line height "Loose", and a black two-line text "Target / B" at font size Medium in the hand-drawn font, at line height "Tight".

Steps:
1. Click "Source / A".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target / B".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target / B" is red, at font size Large, in the normal font, with the "Loose" line spacing.
- With "Target / B" selected, "Loose" is highlighted and the line height field shows 1.5.
- The text of "Target / B" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains one two-line text "Undo / me" at font size Medium, line height "Normal".

| Change in step 2 | State after undo | State after redo |
|---|---|---|
| Under "Font size", click "Large" | font size Medium | font size Large |
| Under "Line height", click "Loose" | line height "Normal" (1.25) | line height "Loose" (1.5) |

The existing font size change, and the new line height property.

Steps:
1. Click "Undo / me".
2. Make the change from the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo / me" is in the "State after undo" from the row after a single undo, with that preset highlighted.
- After step 4, "Undo / me" is in the "State after redo" from the row, with that preset highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Hypothesis / H1" at font size Large, line height "Loose".

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Steps:
1. Click "Hypothesis / H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis / H1" and is red at font size Large, with the "Loose" line spacing.
- With the copy selected, "Loose" is highlighted and the line height field shows 1.5.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Survives / reload" at font size Large in the normal font, at line height 1.75 (typed).

Steps:
1. Reload the browser tab.
2. Click "Survives / reload".

Expected result:
- "Survives / reload" is still red, at font size Large, in the normal font, at the same position, with the same line spacing.
- The line height field shows 1.75 and no preset is highlighted.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99002

Preconditions: The canvas contains a red two-line text "Saved / style" at font size Large in the normal font, at line height "Loose".

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved / style".

Expected result:
- "Saved / style" is red, at font size Large, in the normal font, at the same position, with the same line spacing.
- "Loose" is highlighted and the line height field shows 1.5.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors; three-line texts at line heights "Tight", "Loose" and 2.5; and a rectangle with wrapped text at line height "Loose".

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color, line breaks and gaps between lines as on the canvas.
- The text in the rectangle stays inside it.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts and line spacing on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: The canvas contains a three-line text in the hand-drawn font at line height "Loose" and a three-line text in the normal font at line height "Tight". A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- Both texts have the same line breaks and gaps between lines as on the canvas.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99002

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black two-line text "Shared / note" at line height "Normal".

| Change in step 2 | What user B sees |
|---|---|
| Under "Stroke", click the red color | "Shared / note" in red |
| Under "Line height", click "Loose" | "Shared / note" with the lines further apart; with it selected, "Loose" is highlighted |

The existing color change, and the new line height property.

Steps:
1. As user A, click "Shared / note".
2. As user A, make the change from the row.
3. As user B, click "Shared / note".

Expected result:
- User B sees what the row says without reloading.