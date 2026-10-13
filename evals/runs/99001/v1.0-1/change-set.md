# Change set: excalidraw#99001

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:44:32.173Z (fingerprint 65b09d7c7743).

Scope: text underline (issue 99001) on excalidraw.com in desktop browsers (Chrome, Firefox, Safari), plus the mobile layout at 375 px. To read exact font sizes, use the "F" field in the "Properties" panel (Alt+/).

# Text properties

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one black, underlined text element "Colored note" at opacity 100.

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), drag the slider to 50.

Expected result:
- After step 2, the text and its underline both render in red.
- After step 3, the text and its underline are both half transparent.
- The text is still underlined.
- The font family, size and alignment are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font, not underlined.

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Click the "Underline" toggle.
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font, underlined.
- "First" keeps font size Large in the normal font and stays underlined.

## TC-1 "Underline" toggle: underlining a text and removing it
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Login link" at font size Medium in the normal font, not underlined.

Steps:
1. Click "Login link".
2. Click the "Underline" toggle.
3. Click the "Underline" toggle again.

Expected result:
- After step 2, the whole of "Login link" is underlined in black, and the "Underline" toggle shows as active.
- After step 3, "Login link" has no underline, and the toggle shows as not active.
- The text content, font family, font size, color and position stay the same throughout.

## TC-2 "Underline" toggle: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside it, an arrow labeled "yes", and a rectangle without text.

| Selection or state | "Underline" toggle shown |
|---|---|
| Text "Plain" selected | yes |
| Rectangle with "Boxed" selected | yes |
| Arrow labeled "yes" selected | yes |
| Text tool active (press T), nothing selected | yes |
| Rectangle without text selected | no |
| Nothing selected, selection tool active | no |

Rows chosen: every kind of element that can hold text, the Text tool, and the two states where the toggle must stay hidden.

Steps:
1. Set up the selection or state given in the row.
2. Look at the properties panel.

Expected result:
- The "Underline" toggle is shown or hidden as the row says.
- When shown, hovering over it shows the tooltip "Underline".

## TC-3 Ctrl+U / Cmd+U on a selected text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Shortcut text", not underlined. The canvas has focus.

Steps:
1. Click "Shortcut text".
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Ctrl+U (Cmd+U on macOS) again.

Expected result:
- After step 2, "Shortcut text" is underlined and the "Underline" toggle shows as active.
- After step 3, the underline is gone and the toggle shows as not active.
- The browser does not open the page source or a new tab at either step.

## TC-4 Ctrl+U while editing with part of the text selected
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Click here to continue", not underlined.

Steps:
1. Double-click "Click here to continue" to edit it.
2. Select only the word "here" with the mouse.
3. Press Ctrl+U (Cmd+U on macOS).
4. Press Esc.

Expected result:
- The browser does not open the page source.
- After step 4, the whole of "Click here to continue" is underlined, not just "here".
- The text content is unchanged.

## TC-5 Ctrl+U with nothing selected
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #99001

Preconditions: The canvas contains a text "Untouched", not underlined. Nothing is selected, and the selection tool is active.

Steps:
1. Click an empty area of the canvas.
2. Press Ctrl+U (Cmd+U on macOS).
3. Press T to choose the text tool.
4. Click an empty area of the canvas.
5. Type "After shortcut".
6. Press Esc.

Expected result:
- "Untouched" stays not underlined.
- "After shortcut" is created without underline, so the default for new text is unchanged.
- The canvas shows no error message.

## TC-6 Multi-line text: one underline per line
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one underlined text element with three lines: "Short", an empty line, and "A much longer last line".

| Text align | Underline position on each line |
|---|---|
| left | starts at the left edge of the text box |
| center | centered under the line |
| right | ends at the right edge of the text box |

Rows chosen: the three align options offered.

Steps:
1. Click the text.
2. Under "Text align", choose the align given in the row.

Expected result:
- "Short" and "A much longer last line" each have their own underline, as wide as that line's text.
- The underlines sit as the row says.
- The empty line has no underline.

## TC-7 Underline thickness and position scale with font size
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains three underlined texts "jumpy gap": one at Small (16), one at Very large (36), and one at 120, set by typing 120 into the "F" field of the "Properties" panel (Alt+/).

Steps:
1. Zoom so that all three texts are visible.
2. Compare the underlines of the three texts.

Expected result:
- The underline gets thicker and sits farther below the text as the font size grows, in the order 16, 36, 120.
- In each text, the underline sits just below the baseline and may cross the descenders of "j", "y", "p" and "g".
- No underline is cut off at the left or right end.

## TC-8 Several texts with mixed underline values
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts "Input" (underlined), "Process" (not underlined) and "Output" (not underlined).

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Click the "Underline" toggle.
5. Click the "Underline" toggle again.

Expected result:
- After step 3, the "Underline" toggle shows a mixed state, not active.
- After step 4, all three texts are underlined, and the toggle shows as active.
- After step 5, none of the three texts is underlined.
- Their contents and positions are unchanged.

## TC-9 Underline under right-to-left, CJK, emoji and mixed-script text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas is empty.

| Text |
|---|
| مرحبا بالعالم (Arabic, right-to-left) |
| שלום עולם (Hebrew, right-to-left) |
| 你好世界 (Chinese) |
| 🎉 Party 🎉 (emoji at both ends) |
| Login כניסה 登录 (mixed scripts) |

Rows chosen: both right-to-left scripts, a CJK script, emoji at the line edges, and one mixed line where direction changes inside the line.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type the text given in the row.
4. Press Ctrl+U (Cmd+U on macOS).
5. Press Esc.

Expected result:
- The line has one unbroken underline.
- The underline starts at the first character's edge and ends at the last character's edge, emoji included.
- No character overlaps the underline so badly that it becomes unreadable, and no character is clipped.

## TC-10 "Underline" label and tooltip in a locale without a translation
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains one text "Locale check". The developers have named an interface language that has no translation for "Underline".

Steps:
1. Open the main menu.
2. Choose that language in the language list (verify).
3. Click "Locale check".
4. Hover over the "Underline" toggle.

Expected result:
- The toggle's label and tooltip read "Underline" in English.
- Neither is empty, and neither shows a raw key name.
- Clicking the toggle underlines "Locale check".

## TC-11 "Underline" toggle in the 375 px mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: excalidraw.com is open at 375 px width in the mobile layout, on a touch device or in the browser's device emulation. The canvas contains one text "Mobile note", not underlined.

Steps:
1. Tap "Mobile note".
2. Open the properties panel.
3. Tap the "Underline" toggle.

Expected result:
- The "Underline" toggle is fully visible and does not overlap other controls.
- After step 3, "Mobile note" is underlined.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a rectangle with the text "Start" inside it, at font size Medium, not underlined.

Steps:
1. Click the rectangle.
2. Under "Font size", click "Large".
3. Click the "Underline" toggle.

Expected result:
- "Start" renders at font size Large and still fits inside the rectangle.
- After step 3, "Start" is underlined, and the underline stays inside the rectangle border.
- The rectangle's stroke and fill are unchanged, and the rectangle itself gets no underline.

## TC-12 Arrow label: underline
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes", not underlined.

Steps:
1. Click the arrow.
2. Click the "Underline" toggle.
3. Click one of the rectangles.
4. Drag it 150 px down.

Expected result:
- After step 2, the label "yes" is underlined in the arrow's stroke color.
- The label stays at the middle of the arrow and remains fully visible, with its underline.
- After step 4, the label is still underlined and still at the middle of the arrow.

## TC-13 Sticky note label: underline with auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a sticky note, created with the "Sticky note" tool, whose label is "Ship the release notes before Friday morning". The label is long enough that auto-fit shows it smaller than the picked font size.

Steps:
1. Click the sticky note.
2. Click the "Underline" toggle.

Expected result:
- Every line of the label is underlined.
- The label is shown at the same size as before step 2, so auto-fit is unchanged.
- No underline crosses the note's edges.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Source" at font size Large in the normal font. It also contains a black text "Target" at font size Medium in the hand-drawn font, not underlined.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font, and underlined.
- The text of "Target" is unchanged.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Hypothesis H1" at font size Large.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

Rows chosen: every way of copying an element.

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis H1", is red at font size Large, and is underlined.
- The original is unchanged.

## TC-14 Undo and redo of an underline toggle
Action: create
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Undo underline", not underlined.

Steps:
1. Click "Undo underline".
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo underline" has no underline after a single undo, and the "Underline" toggle shows as not active.
- After step 4, "Undo underline" is underlined again, and the toggle shows as active.
- The text content and position stay the same throughout.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Survives reload" at font size Large in the normal font.

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, at font size Large, in the normal font, underlined, at the same position.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Saved style" at font size Large in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

Expected result:
- "Saved style" is red, at font size Large, in the normal font, underlined, at the same position.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. One of them is an underlined, red, two-line text "First line" / "Second line, longer". Another is an underlined text "jumpy" at the far right of the drawing.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- Each line of the two-line text has its own red underline, as wide as on the canvas.
- No character and no underline is cut off at the image edges, including the underline of "jumpy".

## C-017 SVG export renders the same fonts on another computer
Action: update C-017
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text in the hand-drawn font and an underlined text in the normal font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.
- The text in the normal font is underlined, as on the canvas, and the other text is not.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note", not underlined.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, click the "Underline" toggle.
4. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" in red and underlined, without reloading.

## TC-15 Older Excalidraw version opens a file with underlined text
Action: create
Area: Files, sharing and export
Priority: Low · Type: regression
Tags: #99001

Preconditions: A .excalidraw file was saved by the version with underline and contains a red, underlined text "Legacy" at font size Large. The developers provide an Excalidraw build released before underline.

Steps:
1. Open the older Excalidraw build.
2. Open the main menu and choose "Open".
3. Pick the saved file.

Expected result:
- "Legacy" is shown red, at font size Large, at the same position, without an underline.
- No error message is shown, and the rest of the drawing loads.