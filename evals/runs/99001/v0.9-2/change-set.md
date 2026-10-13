# Change set: excalidraw#99001

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T10:01:41.049Z (fingerprint 410a5cf85c5a).

Scope: text underline (whole element) on desktop Chrome, Firefox, Safari and Edge, plus the mobile layout (TC-10). On macOS use Cmd instead of Ctrl. To read the exact font size, select the text and press Alt+/ to open the "Properties" panel; the "F" field shows the size and accepts a typed size.

# Text properties

## C-004 Text color: changing the stroke color of text
Action: update C-004
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one black, underlined text element "Colored note" at full opacity.

Steps:
1. Click "Colored note".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), drag the slider to 30.

Expected result:
- After step 2, the text renders in red and its underline is red too.
- After step 2, the font family, size, alignment and underline are unchanged.
- After step 3, the text and its underline are both faded to the same opacity.

## C-005 Several text elements: one style change applies to all
Action: update C-005
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains text elements "Input", "Process" and "Output", all at font size Medium. "Input" is underlined; "Process" and "Output" are not.

Steps:
1. Click "Input".
2. Shift+click "Process".
3. Shift+click "Output".
4. Under "Font size", click "Large".
5. Look at the "Underline" toggle.
6. Click "Underline".
7. Click "Underline".

Expected result:
- After step 4, all three texts are at font size Large.
- In step 5, the "Underline" toggle shows off (not pressed).
- After step 6, all three texts are underlined and the toggle shows on.
- After step 7, none of the three texts is underlined and the toggle shows off.
- Their contents and positions are unchanged throughout.

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
4. Click "Underline".
5. Press Esc.
6. Press T to choose the text tool.
7. Click an empty area of the canvas.
8. Type "Second".
9. Press Esc.

Expected result:
- "Second" is created at font size Large in the normal font, underlined.
- "First" keeps font size Large in the normal font, underlined.

## TC-1 "Underline" toggle: turning underline on and off
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Login link" at font size Medium in the normal font, not underlined.

Steps:
1. Click "Login link".
2. Hover over the "Underline" toggle in the properties panel.
3. Click "Underline".
4. Click "Underline".

Expected result:
- In step 2, the tooltip reads "Underline — Ctrl+U".
- After step 3, a straight line runs under the whole text "Login link" and the toggle shows on.
- After step 4, the underline is gone and the toggle shows off.
- The text content, font, size, color, position and selection box size are the same after each step.

## TC-2 "Underline" toggle: when it is shown in the properties panel
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text "Plain", a rectangle with the text "Boxed" inside it, an arrow labeled "yes", and an empty rectangle with no text.

| State | "Underline" toggle shown |
|---|---|
| Text "Plain" selected | yes |
| Rectangle with "Boxed" selected | yes |
| Arrow labeled "yes" selected | yes |
| Text tool active (press T), nothing selected | yes |
| Empty rectangle selected | no |

Rows cover every state the answer names, plus one shape without text as the negative row.

Steps:
1. Bring the canvas into the state given in the row.
2. Look at the text section of the properties panel.

Expected result:
- The "Underline" toggle is shown or not shown as given in the row.

## TC-3 Ctrl+U shortcut on a selected text
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Emphasis", not underlined. No text is being edited.

Steps:
1. Click "Emphasis".
2. Press Ctrl+U (Cmd+U on macOS).
3. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- After step 2, "Emphasis" is underlined and the "Underline" toggle shows on.
- After step 3, the underline is gone and the toggle shows off.
- The browser does not open a page source view or a new tab at either step.

## TC-4 Ctrl+U shortcut while editing text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Click here to sign up", not underlined.

Steps:
1. Double-click "Click here to sign up" to edit it.
2. Double-click the word "here" to highlight only that word.
3. Press Ctrl+U (Cmd+U on macOS).
4. Press End.
5. Type " now".
6. Press Esc.

Expected result:
- After step 3, the whole text is underlined, not only "here", and the editor stays open.
- After step 3, the browser does not open a page source view.
- After step 6, the text reads "Click here to sign up now" and the whole text, including " now", is underlined.

## TC-5 Underline on multi-line text with left, center and right align
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains an underlined text with three lines: "Home", "About our company" and "Contact   " (with three trailing spaces).

| Text align (verify) |
|---|
| left |
| center |
| right |

All three align options are covered because the underline must follow the position of each line.

Steps:
1. Click the text.
2. Under "Text align" (verify), choose the align given in the row.

Expected result:
- Each of the three lines has its own underline, spanning exactly that line's text and aligned the same way as the line.
- The trailing spaces after "Contact" are not underlined.
- No underline overlaps the line below it, and the last underline is not clipped at the bottom of the text box.

## TC-6 Underline thickness and offset across font sizes
Action: create
Area: Text properties
Priority: Low · Type: boundary
Tags: #99001

Preconditions: The canvas contains an underlined two-line text "Big\nheading".

| Font size | How to set it |
|---|---|
| 16 | Under "Font size", click "Small" |
| 36 | Under "Font size", click "Very large" |
| 200 | Type 200 in the "F" field of the "Properties" panel (Alt+/) |

The smallest and largest presets plus a large typed size show whether thickness and offset scale with size.

Steps:
1. Click the text.
2. Set the font size as given in the row.
3. Zoom so the text fills about half of the screen.

Expected result:
- The underline thickness and its gap below the letters look in the same proportion to the letters as at the other sizes in the table.
- The underline of "Big" does not touch the letters of "heading".
- The underline of "heading" is not clipped at the bottom of the text box.

## TC-7 Underline in the hand-drawn, normal and code fonts
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains an underlined text "Wireframe label" at font size Large.

| Font family |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |

These are the three quick-choice fonts; the hand-drawn one is the most likely to differ.

Steps:
1. Click "Wireframe label".
2. Under "Font family", click the font given in the row.

Expected result:
- The underline is a straight, even line under the whole text, not a sketchy or wavy line.
- The underline spans the full width of the text in the new font.

## TC-8 Underline on right-to-left, CJK, emoji and descender text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas is empty. The text tool is set to underline (the "Underline" toggle shows on with the text tool active).

| Text |
|---|
| مرحبا بالعالم |
| שלום עולם |
| 下载文件 |
| Ship it 🚀🎉 |
| happy jogging typography |

Arabic and Hebrew cover right-to-left text, Chinese covers CJK, the emoji row covers emoji at the line end, and the last row is full of descenders.

Steps:
1. Click an empty area of the canvas.
2. Type the text given in the row.
3. Press Esc.

Expected result:
- The underline spans the full width of the text, from its first to its last character.
- No character, accent, emoji or descender (g, p, y, j) is clipped; descenders may touch or cross the underline.

## TC-9 Underline not tied to element links
Action: create
Area: Text properties
Priority: Low · Type: negative
Tags: #99001

Preconditions: The canvas contains one text element "Docs", not underlined.

Steps:
1. Click "Docs".
2. Press Ctrl+K (verify) to add a link.
3. Type "https://docs.excalidraw.com" (verify).
4. Press Enter.
5. Press Esc.

Expected result:
- "Docs" is not underlined after the link is added.
- The "Underline" toggle shows off while "Docs" is selected.

## TC-10 "Underline" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The app is open in the mobile layout at 375 px width. The canvas contains one text element "Tap target", not underlined.

Steps:
1. Tap "Tap target".
2. Open the properties panel (verify how it opens in the mobile layout).
3. Tap "Underline".

Expected result:
- The "Underline" toggle is present in the text section of the panel.
- After step 3, "Tap target" is underlined and the toggle shows on.

# Text in shapes and on arrows

## TC-11 Underline on text in a shape, on an arrow label and on a sticky note
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a rectangle about 160 px wide with "Check whether the uploaded file exceeds the size limit" inside it, two rectangles joined by an arrow labeled "yes", and a sticky note (made with the "Sticky note" tool) with the label "Follow up". None of the texts is underlined.

| Container |
|---|
| Rectangle with wrapped text |
| Arrow labeled "yes" |
| Sticky note "Follow up" |

These are the three container kinds that hold text.

Steps:
1. Note the size of the container and the line breaks of its text.
2. Click the container (not the text itself).
3. Click "Underline".

Expected result:
- Every line of the container's text is underlined.
- The underline uses the text's color.
- The line breaks of the text are the same as in step 1.
- The container keeps the size it had in step 1; the arrow label stays at the middle of the arrow.
- The container's stroke and fill are unchanged.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red, underlined text "Source" at font size Large in the normal font, and a black text "Target" at font size Medium in the hand-drawn font, not underlined.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font, and underlined.
- The "Underline" toggle shows on while "Target" is selected.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Action: update C-012
Area: Styles, copies and history
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one text element "Undo me" at font size Medium, not underlined.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Large".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).
5. Click "Underline".
6. Press Ctrl+Z (Cmd+Z on macOS).
7. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo.
- After step 4, "Undo me" is at Large again.
- After step 6, "Undo me" is not underlined after a single undo and is still at Large.
- After step 7, "Undo me" is underlined again.
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
- The copy reads "Hypothesis H1" and is red at font size Large, underlined.
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

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors. One of them is a blue, underlined two-line text "Terms\nof service".

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- "Terms" and "of service" are each underlined in blue, at the same position under the text as on the canvas; the other texts are not underlined.
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
- The text in the normal font is underlined across its full width; the hand-drawn text is not underlined.

## C-018 Style changes reach other users in live collaboration
Action: update C-018
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note", not underlined.

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user A, click "Underline".
4. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" in red and underlined without reloading.

## TC-12 Scene saved before underline existed opens without underline
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #99001

Preconditions: A .excalidraw file saved with a version of Excalidraw before underline was added contains a red text "Legacy" at font size Large in the normal font.

Steps:
1. Open the main menu and choose "Open".
2. Pick the legacy file.
3. Click "Legacy".

Expected result:
- "Legacy" is red, at font size Large, in the normal font, at the same position, and not underlined.
- The "Underline" toggle shows off.
- No error message is shown.