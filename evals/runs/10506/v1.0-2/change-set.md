# Change set: excalidraw#10506

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:33:59.815Z (fingerprint 524698e237d5).

Scope: latest Chrome, Firefox and Safari on desktop, and Safari on iOS. Exact font sizes are read in the "F" field of the "Properties" panel (Alt+/, "Shape properties" section). Use Cmd instead of Ctrl on macOS.

# Text properties

## C-002 Font size: switching between preset sizes
Action: update C-002
Area: Text properties
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Size test" at font size Medium. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Size test".
2. Under "Font size", click "Very large".
3. Under "Font size", click "Huge".
4. Under "Font size", click "Giant".
5. Under "Font size", click "Small".

Expected result:
- After step 2, "F" shows 36, "Very large" is highlighted, and the text and its selection box are larger.
- After step 3, "F" shows 56 and "Huge" is highlighted.
- After step 4, "F" shows 96 and "Giant" is highlighted.
- After step 5, "F" shows 16, "Small" is highlighted, and the text is smaller than at Medium.
- After each step, exactly one preset is highlighted and the text content and font family are unchanged.

## TC-1 "Font size" control: presets and tooltips
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a text "Free text", a rectangle with the text "Boxed" and a sticky note with the text "Note".

| State | How to reach it |
|---|---|
| Text selected | Click "Free text" |
| Text tool active | Press Esc, then press T (verify) |
| Shape with text selected | Click the rectangle with "Boxed" |
| Sticky note selected | Click the sticky note with "Note" |

These are the states in which the font size control is shown. Each one is a separate path that builds the control.

Steps:
1. Reach the state given in the row.
2. Hover over the fifth button under "Font size".
3. Hover over the sixth button under "Font size".

Expected result:
- "Font size" shows six presets in this order: Small, Medium, Large, Very large, Huge, Giant.
- After step 2, the tooltip reads "Huge".
- After step 3, the tooltip reads "Giant".
- All six buttons are on screen and none overlaps another control.

## TC-2 Font size: preset highlight for sizes set without a preset
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Highlight" at the starting size given in the row. The "Properties" panel is open (Alt+/).

| Starting size | How the size is changed | "F" shows after | Highlighted preset |
|---|---|---|---|
| 20 | Type 56 into "F" and press Enter | 56 | Huge |
| 20 | Type 96 into "F" and press Enter | 96 | Giant |
| 51 | Press Ctrl+Shift+> once | 56 | Huge |
| 87 | Press Ctrl+Shift+> once | 96 | Giant |
| 20 | Type 60 into "F" and press Enter | 60 | none |
| 20 | Type 500 into "F" and press Enter | 500 | none |
| 20 | Drag a corner handle outwards until "F" shows a size between 60 and 90 | the dragged size, possibly not a whole number (verify) | none |

These rows cover both new preset values, each reached by typing and by the shortcut (51 × 1.1 rounds to 56, 87 × 1.1 rounds to 96). They also cover a size between presets, the largest tested size and a corner resize.

Steps:
1. Click "Highlight".
2. Change the size as given in the row.

Expected result:
- "F" shows the value given in the row.
- Under "Font size", the preset given in the row is highlighted. For "none", no preset is highlighted.
- The text renders at the new size with all characters visible.

## TC-3 Font size shortcuts above "Giant"
Action: create
Area: Text properties
Priority: Medium · Type: boundary
Tags: #10506

Preconditions: The canvas contains one text element "No ceiling" at font size Giant. The "Properties" panel is open (Alt+/).

Steps:
1. Click "No ceiling".
2. Press Ctrl+Shift+>.
3. Press Ctrl+Shift+>.
4. Under "Font size", click "Giant".
5. Press Ctrl+Shift+<.

Expected result:
- After step 2, "F" shows 106 and no preset is highlighted.
- After step 3, "F" shows 117 and the text is larger than in step 2.
- After step 4, "F" shows 96 and "Giant" is highlighted.
- After step 5, "F" shows 87 and no preset is highlighted.

## TC-4 "F" field: invalid font size input
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #10506

Preconditions: The canvas contains one text element "Guarded" at font size Huge. The "Properties" panel is open (Alt+/).

| Input |
|---|
| 0 |
| -20 |
| abc |
| (empty) |

These are the lower bound, a negative number, non-numeric text and missing input.

Steps:
1. Click "Guarded".
2. Clear the "F" field.
3. Type the input given in the row.
4. Press Enter.

Expected result:
- The input is rejected (verify): "F" shows 56 again and "Huge" stays highlighted.
- "Guarded" is still visible at its previous size, and no error message or blank canvas appears.

## C-005 Several text elements: one style change applies to all
Action: update C-005
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains three text elements. "Input" is at font size Medium. "Process" was scaled with a corner handle to a size between 60 and 90. "Output" is at 500, typed into the "F" field. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Look at "Font size".
5. Under "Font size", click "Huge".
6. Click "Process" alone.

Expected result:
- After step 4, no preset is highlighted.
- After step 5, all three texts are the same size and "Huge" is highlighted.
- After step 6, "F" shows exactly 56.
- The contents and positions of the three texts are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font.

Steps:
1. Click "First".
2. Under "Font size", click "Giant".
3. Under "Font family", click the "Normal" font.
4. Press Esc.
5. Press T to choose the text tool.
6. Click an empty area of the canvas.
7. Type "Second".
8. Press Esc.

Expected result:
- "Second" is created at font size Giant (96) in the normal font.
- With "Second" selected, "Giant" is highlighted under "Font size".
- "First" keeps font size Giant in the normal font.

## TC-5 "Font size" presets on a 375 px mobile screen
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Excalidraw is open in Safari on an iPhone with a 375 px wide screen, in portrait. The canvas contains one text element "Phone" at font size Medium.

Steps:
1. Tap "Phone".
2. Open the properties panel (verify how it is opened on mobile).
3. Tap "Giant" under "Font size".
4. Tap "Huge" under "Font size".

Expected result:
- All six presets are fully visible in the panel without horizontal scrolling, and none overlaps another control.
- After step 3, "Phone" is at the Giant size and "Giant" is highlighted.
- After step 4, "Phone" is at the Huge size and "Huge" is highlighted.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a rectangle about 200 px wide with the text "Start the review" inside it, at font size Medium.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Giant".

Expected result:
- "Start the review" renders at font size Giant and wraps onto several lines inside the rectangle.
- No character crosses the rectangle border.
- The rectangle grows taller and its width stays the same.
- "Giant" is highlighted under "Font size".
- The rectangle's stroke and fill are unchanged.

## TC-6 Arrow label at a large preset
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a horizontal arrow about 400 px long with the label "Approve" at font size Medium.

| Preset |
|---|
| Huge |
| Giant |

These are both new presets. Giant is the label that is most likely to move off the middle.

Steps:
1. Click the arrow.
2. Under "Font size", click the preset given in the row.
3. Drag the arrow's end point 150 px down.

Expected result:
- After step 2, "Approve" renders at the chosen preset and stays centered on the middle of the arrow.
- After step 3, "Approve" is still at the middle of the arrow at the same size.

## TC-7 Sticky note label at "Giant"
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a sticky note with the label given in the row, at font size Medium. Next to it is a free text "Hi" at font size Giant, used as a reference.

| Label | Shown size |
|---|---|
| Hi | same height as the reference "Hi" |
| Prepare the quarterly report for the board meeting | smaller than the reference, fitted to the note |

A short label fits at full size. A long label forces auto-fit.

Steps:
1. Click the sticky note.
2. Under "Font size", click "Giant".

Expected result:
- The label is shown at the size given in the row and is never larger than the reference "Hi".
- No character crosses the sticky note border.
- "Giant" is highlighted under "Font size".

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Source" at font size Giant in the normal font, and a black text "Target" at font size Medium in the hand-drawn font. The "Properties" panel is open (Alt+/).

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Giant, in the normal font.
- "F" shows 96 for "Target" and "Giant" is highlighted.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains one text element "Undo me" at font size Medium.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Huge".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo, and "Medium" is highlighted.
- After step 4, "Undo me" is at Huge again, and "Huge" is highlighted.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Hypothesis H1" at font size Giant.

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
- The copy reads "Hypothesis H1" and is red at font size Giant.
- With the copy selected, "Giant" is highlighted under "Font size".
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Survives reload" at font size Giant in the normal font.

Steps:
1. Reload the browser tab.
2. Click "Survives reload".

Expected result:
- "Survives reload" is still red, at font size Giant, in the normal font, at the same position.
- "Giant" is highlighted under "Font size".

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #10506

Preconditions: The canvas contains a red text "Saved style" at font size Giant in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.
6. Click "Saved style".

Expected result:
- "Saved style" is red, at font size Giant, in the normal font, at the same position.
- "Giant" is highlighted under "Font size".
- In the saved file, the "fontSize" field of "Saved style" is 96.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, including a text "Huge title" at font size Huge and a text "Giant title" at font size Giant.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Giant title" is larger than "Huge title" in the same proportion as on the canvas.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: The canvas contains a text in the hand-drawn font at font size Medium and a text in the normal font at font size Giant. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The Giant text keeps the same size relative to the Medium text as on the canvas, and no character is cut off.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #10506

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" at font size Medium.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, under "Font size", click "Giant".
4. As user B, look at "Shared note".
5. As user B, click "Shared note".

Expected result:
- After step 4, user B sees "Shared note" in red at the Giant size without reloading.
- After step 5, "Giant" is highlighted under "Font size" for user B.