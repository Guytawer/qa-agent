# Change set: excalidraw#99001

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-11T14:00:57.325Z (fingerprint 6f1a327d5ae2).

Scope: latest Chrome, Firefox, Safari and Edge on desktop, plus the mobile layout 375 px wide (TC-9). Exact font sizes can be read in the "F" field of the "Properties" panel (Alt+/). Italic combined with underline is out of scope until #11404 ships.

# Text properties

## C-004 Text color and opacity: changing the stroke color and opacity of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one black, underlined text element "Colored note" at full opacity.

| Change |
|---|
| Under "Stroke", click the red color |
| Under "Opacity" (verify), set the value to 30 |

Color is the existing check; opacity is the second property that changes how the text's ink looks, and the underline must follow both.

Steps:
1. Click "Colored note".
2. Make the change given in the row.

Expected result:
- The text and its underline render with the change from the row, both with the same color and opacity.
- The underline is still shown under the whole text.
- The font family, size and alignment are unchanged.

## C-006 New text uses the last chosen text style
Action: update C-006
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "First" at font size Medium in the hand-drawn font, without underline.

Steps:
1. Click "First".
2. Under "Font size", click "Large".
3. Under "Font family", click the "Normal" font.
4. Click the "Underline" toggle.
5. Press Esc.
6. Press T (verify) to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font, underlined.
- "First" keeps font size Large in the normal font, underlined.

## TC-1 "Underline" toggle on a text element
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Forgot password?" at font size Medium, without underline.

Steps:
1. Click "Forgot password?".
2. Click the "Underline" toggle.
3. Click the "Underline" toggle again.

Expected result:
- After step 2, "Forgot password?" is underlined from its first to its last character, in black.
- After step 2, the "Underline" toggle shows as pressed.
- After step 3, the text has no underline and the toggle shows as not pressed.
- The text content, font, size and position stay the same throughout.

## TC-2 "Underline" toggle: tooltip and placement
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The browser runs on Windows or Linux. The canvas contains a text "Label" and a rectangle with the text "Box" inside it.

| What is selected or active |
|---|
| The text "Label" is selected |
| The rectangle with "Box" is selected |
| The text tool is active (press T) and nothing is selected |

These are the three states in which the toggle must be shown.

Steps:
1. Set up the state given in the row.
2. Hover over the "Underline" toggle in the properties panel.

Expected result:
- The "Underline" toggle is shown next to the text align control.
- The tooltip reads "Underline (Ctrl+U)".

## TC-3 Ctrl+U / Cmd+U: underlining with the shortcut
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Forgot your password" without underline. The canvas has focus.

| State before the shortcut |
|---|
| "Forgot your password" is selected with a single click |
| "Forgot your password" is in edit mode (double-clicked), cursor at the end |
| "Forgot your password" is in edit mode, only the word "your" is highlighted |

These are the ways the shortcut can reach a text; the last row checks that a partial highlight still underlines the whole element.

Steps:
1. Set up the state given in the row.
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Esc.
4. Click "Forgot your password".
5. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- After step 3, the whole text is underlined, from its first to its last character.
- After step 3, the text still reads "Forgot your password".
- After step 5, the text has no underline.
- No page-source view opens in a new tab or window at any step.

## TC-4 Ctrl+U / Cmd+U with nothing selected
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99001

Preconditions: The canvas contains one text element "Plain text" without underline. Nothing is selected. The canvas has focus.

Steps:
1. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- "Plain text" stays without underline.
- No page-source view opens in a new tab or window.
- The canvas and the properties panel are unchanged.

## TC-5 Underline on multi-line text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text element with three lines of different lengths, "Sign in", "Forgot your password?" and "Create account", typed with Enter between them. It also contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines.

| Element | Text align |
|---|---|
| The three-line text | left |
| The three-line text | center |
| The three-line text | right |
| The rectangle | center |

Each alignment places the line starts differently; the rectangle row checks lines broken by wrapping instead of by Enter.

Steps:
1. Click the element given in the row.
2. Under text align, click the alignment given in the row.
3. Click the "Underline" toggle.

Expected result:
- Every line is underlined.
- Each underline starts under the first character and ends under the last character of its own line, so shorter lines have shorter underlines.
- No underline extends past its line's text or crosses a shape border.

## TC-6 Underline thickness follows font size
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains two underlined texts: "Small link" at font size Small and "Large link" at font size Very large.

Steps:
1. Click "Small link".
2. Press Alt+/ to open the "Properties" panel.
3. Read the "F" field.
4. Click "Large link".
5. Read the "F" field.
6. Compare the two underlines.

Expected result:
- The "F" field shows 16 for "Small link" and 36 for "Large link".
- The underline of "Large link" is visibly thicker than the underline of "Small link".
- Each underline sits below its own text and does not cross the letters.

## TC-7 Underline in other scripts and with emoji
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas is empty and has focus.

| Text |
|---|
| مرحبا بالعالم (Arabic, right-to-left) |
| שלום עולם (Hebrew, right-to-left) |
| 你好世界 (Chinese) |
| Login 登录 تسجيل (mixed Latin, Chinese and Arabic) |
| Launch 🚀✨ (emoji) |

Both right-to-left scripts, a CJK script with tall glyphs, a line where direction changes mid-line, and emoji, which come from a separate font.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type the text from the row.
4. Press Esc.
5. Click the text.
6. Click the "Underline" toggle.

Expected result:
- The underline runs under the whole line, from one end of the text to the other.
- No part of the underline or of the characters is clipped.
- The characters render as typed, in the same order.

## TC-8 Several texts with mixed underline
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains the texts "Home" and "About", both underlined, and "Contact" without underline.

Steps:
1. Click "Home".
2. Shift+click "About".
3. Shift+click "Contact".
4. Click the "Underline" toggle.
5. Click the "Underline" toggle again.

Expected result:
- After step 3, the "Underline" toggle shows as not pressed.
- After step 4, all three texts are underlined and the toggle shows as pressed.
- After step 5, none of the three texts is underlined.
- The contents and positions of the texts are unchanged throughout.

## TC-9 "Underline" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Excalidraw is open in the mobile layout at 375 px wide (a phone, or the browser developer tools' device mode). The canvas contains a text "Tap to underline" without underline.

Steps:
1. Tap "Tap to underline".
2. Open the properties panel from the bottom toolbar (verify).
3. Tap the "Underline" toggle.

Expected result:
- The "Underline" toggle is fully visible next to the text align control, without overlapping other controls and without horizontal scrolling.
- After step 3, "Tap to underline" is underlined and the toggle shows as pressed.

# Text in shapes and on arrows

## C-009 Style change on a shape applies to its text
Action: update C-009
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a rectangle with the text "Start" inside it, at font size Medium, without underline.

| Style change |
|---|
| Under "Font size", click "Large" |
| Click the "Underline" toggle |

Font size is the existing check; underline is the new text style that must reach the text through its shape.

Steps:
1. Click the rectangle.
2. Make the style change given in the row.

Expected result:
- "Start" shows the style change from the row and still fits inside the rectangle.
- The rectangle's stroke and fill are unchanged.
- No line appears under the rectangle itself.

## TC-10 Arrow label: underline
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes", without underline.

Steps:
1. Double-click the label "yes".
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Esc.
4. Click one of the rectangles.
5. Drag it 150 px down.

Expected result:
- After step 3, "yes" is underlined across the whole word, in the label's color.
- The arrow itself shows no extra line.
- After step 5, "yes" is still underlined, at the middle of the arrow, and fully visible.

## TC-11 Sticky note label: underline keeps the auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: regression
Tags: #99001

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, holding the label "Remember to check the mobile layout before release" at font size Very large, shown smaller than Very large because it auto-fits the note.

Steps:
1. Note the label's displayed size and line breaks.
2. Click the sticky note.
3. Click the "Underline" toggle.

Expected result:
- Every line of the label is underlined.
- The label's displayed size and line breaks are the same as in step 1.
- No underline crosses the edge of the note.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains the four texts named in the table, with the styles given there.

| Source | Target |
|---|---|
| "Underlined source": red, Large, normal font, underlined | "Plain target": black, Medium, hand-drawn font, no underline |
| "Plain source": black, Medium, hand-drawn font, no underline | "Underlined target": red, Large, normal font, underlined |

The first row checks that underline is carried over; the second checks that "no underline" is carried over too and removes an existing underline.

Steps:
1. Click the source text from the row.
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click the target text from the row.
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- The target has the same color, font size, font and underline as the source.
- The text of the target is unchanged.
- The source is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Undo me" at font size Medium, without underline.

| Style change |
|---|
| Under "Font size", click "Large" |
| Click the "Underline" toggle |

Font size is the existing check; underline is the new property that history must track.

Steps:
1. Click "Undo me".
2. Make the style change given in the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at font size Medium without underline after a single undo.
- After step 4, "Undo me" shows the style change from the row again.
- The text content and position stay the same throughout.

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

These are all the ways to copy a text; each one builds the copy differently.

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis H1" and is red, underlined, at font size Large.
- The original is unchanged.

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
- "Survives reload" is still red, underlined, at font size Large, in the normal font, at the same position.

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
- "Saved style" is red, underlined, at font size Large, in the normal font, at the same position.

## C-016 Text in an exported image matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors, without underline, and a red, underlined two-line text "Terms of service" / "Privacy policy".

| Way to export | How to open the result |
|---|---|
| Main menu, "Export image...", "PNG" | Open the downloaded file |
| Main menu, "Export image...", "SVG" | Open the downloaded file in a browser |
| Select all, right-click, "Copy to clipboard as PNG" (verify) | Paste into an image editor |
| Select all, right-click, "Copy to clipboard as SVG" (verify) | Paste into a text file, save it as .svg and open it in a browser |

These are all the ways the canvas leaves Excalidraw as an image; PNG and SVG are drawn by different code.

Steps:
1. Export the canvas the way given in the row.
2. Open the result as given in the row.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- Both lines of "Terms of service" / "Privacy policy" are underlined in red, each under its own line width.
- The texts without underline on the canvas have no underline in the image.
- No character or underline is cut off at the image edges.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" without underline.

| Change by user A |
|---|
| Under "Stroke", click the red color |
| Click the "Underline" toggle |

Color is the existing check; underline is the new property that must be synced.

Steps:
1. As user A, click "Shared note".
2. As user A, make the change given in the row.
3. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" with the change from the row, without reloading.

## TC-12 Older version opens a file with underlined text
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #99001

Preconditions: A file "underline.excalidraw" was saved from a build with underline support. It contains a red, underlined text "Old version check" at font size Large in the normal font, and a rectangle. An Excalidraw build from before underline support (for example, the previous release) is open.

Steps:
1. In the older build, open the main menu and choose "Open".
2. Pick "underline.excalidraw".

Expected result:
- The file opens without an error message.
- "Old version check" is shown red, at font size Large, in the normal font, without underline.
- The text and the rectangle are at the same positions as when the file was saved.