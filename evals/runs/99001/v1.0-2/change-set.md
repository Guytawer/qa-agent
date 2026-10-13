# Change set: excalidraw#99001

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T12:47:46.987Z (fingerprint ecaf8ee58dfd).

Scope: text underline (issue 99001) on desktop Chrome, Firefox and Safari, plus a mobile layout check; Ctrl means Cmd on macOS. Italic combined with underline is out of scope until italic ships.

# Text properties

## TC-1 "Underline" toggle: underlining a text and removing the underline
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Login link" without underline.

Steps:
1. Click "Login link".
2. In the properties panel, click "Underline".
3. Click "Underline" again.

Expected result:
- After step 2, the whole text "Login link" is underlined and the "Underline" toggle shows as on.
- After step 3, "Login link" has no underline and the toggle shows as off.
- The text content, font family, size, color and position are unchanged after each step.

## TC-2 "Underline" toggle: where it is shown and hidden
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside it, an arrow labeled "next", and a rectangle without text.

| State | "Underline" toggle in the properties panel |
|---|---|
| "Plain" selected | shown |
| Rectangle with "Boxed" selected | shown |
| Arrow labeled "next" selected | shown |
| Text tool active, nothing selected | shown |
| Rectangle without text selected | hidden |
| Nothing selected, selection tool active | hidden |

Every way a text can be present is covered, plus the two states with no text at all.

Steps:
1. Bring the canvas into the state given in the row.
2. Look at the properties panel.

Expected result:
- The "Underline" toggle is shown or hidden as the row's last column says.

## TC-3 Ctrl+U / Cmd+U on a selected or edited text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Shortcut target" without underline. Desktop browser.

| How the text is targeted |
|---|
| "Shortcut target" is selected (single click) |
| "Shortcut target" is being edited (double-click, caret inside the text) |

Selection and editing are the two states in which the shortcut must act.

Steps:
1. Target "Shortcut target" the way given in the row.
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Esc.

Expected result:
- The whole text "Shortcut target" is underlined, not only the word at the caret.
- The browser does not open the page source and no new tab or window appears.
- The text content is unchanged.

## TC-4 Ctrl+U with nothing or only non-text elements selected
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #99001

Preconditions: The canvas contains a text "Untouched" without underline and a rectangle without text. Desktop browser.

| Selection |
|---|
| Nothing selected |
| Only the rectangle without text selected |

These are the two states in which the shortcut has no text to act on.

Steps:
1. Set the selection given in the row.
2. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- "Untouched" stays without underline.
- The rectangle is unchanged.
- No error message appears in the app.

## TC-5 Underlined text in the text editor
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains an underlined two-line text "First line / Second line".

Steps:
1. Double-click the text to start editing.
2. Type " edited" at the end of the second line.
3. Press Esc.

Expected result:
- After step 1, the editor shows both lines underlined, with the underline in the same place as on the canvas; text and underline do not jump.
- After step 2, the typed characters are underlined as part of the second line's underline.
- After step 3, the canvas shows "First line / Second line edited" underlined, in the same place as in the editor.

## TC-6 Underline on multi-line and wrapped text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a left-aligned text of three lines: "Short", an empty line, and "A much longer third line".

Steps:
1. Click the text.
2. In the properties panel, click "Underline".

Expected result:
- "Short" and "A much longer third line" each have their own underline.
- Each underline is as wide as its own line's text: the underline under "Short" is shorter than the one under the third line.
- The spaces between words in the third line are underlined; the underline has no gaps there.
- The empty line has no underline.
- The line breaks are unchanged.

## TC-7 Underline thickness and offset at different font sizes
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains two underlined texts "Tiny" at font size Small and "Huge text" at font size Very large, side by side.

Steps:
1. Zoom the canvas to 200%.
2. Compare the underlines of "Tiny" and "Huge text".

Expected result:
- The underline of "Huge text" is thicker than the underline of "Tiny".
- The gap between the text baseline and the underline of "Huge text" is larger than that of "Tiny".
- Neither underline overlaps the letters' bodies (the parts above the baseline).

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one black, underlined text element "Colored note".

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.

Expected result:
- The text renders in red.
- The underline also renders in red.
- The font family, size, alignment and underline are otherwise unchanged.

## TC-8 Several texts with mixed underline
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts "Home" (underlined), "About" and "Contact" (both without underline).

Steps:
1. Click "Home".
2. Shift+click "About".
3. Shift+click "Contact".
4. Look at the "Underline" toggle.
5. Click "Underline".
6. Click "Underline" again.

Expected result:
- After step 4, the toggle shows a mixed state, not on.
- After step 5, all three texts are underlined and the toggle shows as on.
- After step 6, none of the three texts is underlined and the toggle shows as off.
- The contents and positions of the texts are unchanged.

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
4. Click "Underline".
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font, underlined.
- "First" keeps font size Large in the normal font, underlined.

## TC-9 Underline on right-to-left, CJK and emoji text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas is empty.

| Text | Script |
|---|---|
| "مرحبا بالعالم" | Arabic, right-to-left, joined letters |
| "שלום עולם" | Hebrew, right-to-left |
| "下划线测试" | Chinese, wide glyphs |
| "Launch 🚀 now 🎉" | Latin with emoji |
| "gypsy jumping" | Latin with many descenders |

Right-to-left, wide CJK and emoji glyphs are the scripts most likely to break line width measuring; the last row checks descenders.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type the text from the row.
4. Press Esc.
5. Click the text.
6. Click "Underline".

Expected result:
- The underline runs under the full width of the line, from its first to its last character, including the emoji.
- No part of the underline sticks out beyond the text's first or last character.
- No character is clipped.

## TC-10 "Underline" label in other interface languages
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Lang test".

| Interface language | Why |
|---|---|
| Deutsch | long words |
| العربية (Arabic) | right-to-left interface |

These are the two layout risks named for the toggle; a missing translation shows up in either.

Steps:
1. Open the main menu.
2. Choose the language from the row in the language list (verify).
3. Click "Lang test".
4. Hover over the underline toggle in the properties panel.

Expected result:
- The toggle's tooltip shows readable words with the Ctrl+U shortcut, never an empty tooltip and never a raw key name such as "labels.underline".
- The toggle and its tooltip do not overflow the properties panel or overlap other controls.
- Clicking the toggle underlines "Lang test".

## TC-11 "Underline" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The app is open on a phone, or in a browser's device emulation at 375 px wide with touch enabled. The canvas contains one text element "Tap me".

Steps:
1. Tap "Tap me".
2. Open the properties panel (verify where it opens in the mobile layout).
3. Tap "Underline".

Expected result:
- The "Underline" toggle is visible in the mobile properties panel without overlapping other controls.
- After step 3, "Tap me" is underlined and the toggle shows as on.

# Text in shapes and on arrows

## TC-12 Underline on text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a rectangle about 160 px wide with the wrapped text "Check whether the uploaded file exceeds the size limit" inside it.

Steps:
1. Click the rectangle.
2. In the properties panel, click "Underline".

Expected result:
- Every wrapped line of the text is underlined.
- The line breaks are the same as before step 2.
- The rectangle's width, height, stroke and fill are unchanged.
- No underline crosses the rectangle border.

## TC-13 Underline on an arrow label
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains two rectangles joined by an arrow labeled "yes".

Steps:
1. Click the arrow.
2. In the properties panel, click "Underline".
3. Drag one of the rectangles 150 px down.

Expected result:
- After step 2, the label "yes" is underlined and stays at the middle of the arrow.
- After step 3, the label is still underlined and at the middle of the arrow.
- The arrow itself shows no extra line.

## TC-14 Underline on a sticky note label shrunk by auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, with the label "Underlined note that is long enough to be shrunk by auto-fit" at font size Very large, shown smaller than Very large because of auto-fit.

Steps:
1. Click the sticky note.
2. In the properties panel, click "Underline".

Expected result:
- Every line of the label is underlined.
- The underline is as thin and as close to the text as the label's shown size calls for; it is not the thickness of a Very large text.
- The label is shown at the same size and with the same line breaks as before step 2.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Source" at font size Large in the normal font, and a black text "Target" without underline at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font, and underlined.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Undo me" at font size Medium, without underline.

| Change in step 2 | State after undo | State after redo |
|---|---|---|
| Under "Font size", click "Large" | Medium | Large |
| Click "Underline" | not underlined | underlined |

The existing font size check is kept; the second row adds the new property.

Steps:
1. Click "Undo me".
2. Make the change from the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is in the row's "State after undo" after a single undo.
- After step 4, "Undo me" is in the row's "State after redo".
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

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors; one blue two-line text "Line one / Line two" is underlined.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Line one / Line two" is underlined on both lines in blue, as on the canvas; the other texts have no underline.
- No character or underline is cut off at the image edges.

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
- The normal-font text is underlined as on the canvas; the hand-drawn text has no underline.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note" without underline.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, click "Underline".
4. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" in red and underlined, without reloading.

## TC-15 Older Excalidraw version opening a file with underlined text
Action: create
Area: Files, sharing and export
Priority: Low · Type: regression
Tags: #99001

Preconditions: A .excalidraw file saved with the new version contains a red, underlined text "Legacy check" at font size Large and a rectangle. An Excalidraw build released before underline is available (verify how the team provides one).

Steps:
1. In the older build, open the main menu and choose "Open".
2. Pick the file.

Expected result:
- The file opens with no error message.
- "Legacy check" is shown red, at font size Large, at the same position, without underline.
- The rectangle is shown as saved.