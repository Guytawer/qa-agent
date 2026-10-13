# Change set: excalidraw#99001

Status: **pending**. Apply to cases/ when the feature ships.

Plan approved by maxxx at 2026-10-13T09:58:38.122Z (fingerprint 82be99e56401).

Scope: desktop Chrome, Firefox and Safari on Windows and macOS, plus the mobile layout (TC-11). Cmd replaces Ctrl on macOS. Underline combined with italic (issue 11404, not released) is out of scope.

# Text properties

## TC-1 "Underline" toggle and Ctrl+U: underlining a text and removing the underline
Action: create
Area: Text properties
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains one black text element "Login link" at font size Medium in the hand-drawn font, not underlined.

| Way to toggle |
|---|
| Click the "Underline" toggle in the properties panel |
| Press Ctrl+U (Cmd+U on macOS) |

The two rows cover the two ways the issue defines for toggling underline.

Steps:
1. Click "Login link".
2. Toggle underline the way given in the row.
3. Toggle underline the way given in the row again.

Expected result:
- After step 2, the whole of "Login link" has an underline, and the "Underline" toggle shows as pressed.
- After step 3, "Login link" has no underline, and the "Underline" toggle shows as not pressed.
- The text content, font size, font family, color and position stay the same throughout.
- No "View page source" tab or window opens in the browser.

## TC-2 "Underline" toggle: where it is shown
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text element "Plain", a rectangle with the text "Boxed" inside it, an arrow labeled "next", and a rectangle with no text.

| Selection or tool | "Underline" toggle in the properties panel |
|---|---|
| Text "Plain" selected | shown |
| Rectangle with "Boxed" selected | shown |
| Arrow labeled "next" selected | shown |
| Text tool active (press T), nothing selected | shown |
| Rectangle with no text selected | not shown |

The rows cover each element type that holds text and one element that holds none.

Steps:
1. Make the selection or choose the tool given in the row.
2. Look at the properties panel.

Expected result:
- The "Underline" toggle is shown or not shown as the row says.
- Where shown, hovering over it shows the tooltip "Underline".

## TC-3 Ctrl+U with no text selected
Action: create
Area: Text properties
Priority: Medium · Type: negative
Tags: #99001

Preconditions: The canvas contains a text element "Stay plain", not underlined, and a rectangle with no text.

| Selection |
|---|
| Nothing selected (click an empty area of the canvas) |
| Only the rectangle with no text selected |

The rows cover an empty selection and a selection with no text in it.

Steps:
1. Make the selection given in the row.
2. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- "Stay plain" has no underline.
- No element on the canvas changes.
- No "View page source" tab or window opens in the browser.

## TC-4 Ctrl+U while a text is being edited
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a text element "Edit and underline", not underlined.

Steps:
1. Double-click "Edit and underline" to start editing.
2. Double-click the word "and" to select only that word.
3. Press Ctrl+U (Cmd+U on macOS).
4. Press Esc.

Expected result:
- After step 3, the whole text "Edit and underline" is underlined, not only the word "and".
- After step 4, the whole text stays underlined and its content is unchanged.
- No "View page source" tab or window opens in the browser.

## TC-5 "Underline" toggle with several texts of mixed underline
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains text elements "Home" (underlined), "About" and "Contact" (both not underlined).

Steps:
1. Click "Home".
2. Shift+click "About".
3. Shift+click "Contact".
4. Look at the "Underline" toggle.
5. Click the "Underline" toggle.
6. Click the "Underline" toggle.

Expected result:
- After step 4, the "Underline" toggle shows as not pressed.
- After step 5, all three texts are underlined and the toggle shows as pressed.
- After step 6, none of the three texts is underlined and the toggle shows as not pressed.
- The contents and positions of the three texts are unchanged.

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
- "Second" is created at font size Large in the normal font and is underlined.
- "First" keeps font size Large in the normal font and stays underlined.

## TC-6 Underline on multi-line text with left, center and right alignment
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one underlined two-line text element "Short / A much longer second line", left-aligned.

| Alignment | Underline edge that lines up |
|---|---|
| Center | centers of both underlines |
| Right | right edges of both underlines |
| Left | left edges of both underlines |

The three rows are all the alignments the product offers.

Steps:
1. Click the text element.
2. Under "Text align", click the alignment from the row.

Expected result:
- Each of the two lines has its own underline, as wide as that line's text: the first underline is shorter than the second.
- The underlines line up as the row says, under their lines.
- No underline runs into the space between the lines or past the end of its line.

## TC-7 Underline follows text color and opacity
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one black underlined text element "Emphasis" at opacity 100.

Steps:
1. Click "Emphasis".
2. Under "Stroke", click the red color.
3. Under "Opacity" (verify), set the opacity to 50.

Expected result:
- After step 2, the underline is red, the same red as the text.
- After step 3, the underline is as faded as the text and the canvas behind it shows through both.
- The underline stays at the same place under the text.

## TC-8 Underline scales with font size
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains one underlined text element "Scale me" at font size Small.

Steps:
1. Click "Scale me".
2. Under "Font size", click "Very large".
3. Under "Font size", click "Small".

Expected result:
- After step 2, the underline is longer and thicker than at Small, and its gap below the text grows with the text.
- After step 3, the underline is back to its length, thickness and gap at Small.
- At both sizes, the underline spans the full width of "Scale me".

## TC-9 Underline in different fonts
Action: create
Area: Text properties
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains one underlined text element "Typography gap" in the hand-drawn font.

| Font |
|---|
| Hand-drawn (Excalifont) |
| Normal (Nunito) |
| Code (Comic Shanns) |
| Any font from the list with more fonts |

The three quick-choice fonts are the most used ones; one font from the full list checks a font with different metrics.

Steps:
1. Click "Typography gap".
2. Under "Font family", choose the font from the row.

Expected result:
- The underline is a straight, unbroken line, not a hand-drawn or wavy stroke.
- The underline spans the full width of "Typography gap" and sits below the text.
- The letters "y" and "p" may cross the underline; no letter is cut off.

## TC-10 Underline on right-to-left, CJK and emoji text
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas is empty.

| Text |
|---|
| مرحبا بالعالم |
| שלום עולם |
| 下划线文本テスト |
| Launch 🚀 ready ✅ |
| Hello مرحبا world |

The rows cover Arabic and Hebrew right-to-left text, CJK text, emoji, and one line that mixes left-to-right and right-to-left text.

Steps:
1. Press T to choose the text tool.
2. Click an empty area of the canvas.
3. Type the text from the row.
4. Press Esc.
5. Press Ctrl+U (Cmd+U on macOS).

Expected result:
- One continuous underline runs under the full width of the line, with no gaps between words, characters or emoji.
- No character, vowel mark or emoji is clipped.
- The text content and its character order are unchanged.

## TC-11 "Underline" toggle in the mobile layout
Action: create
Area: Text properties
Priority: Medium · Type: functional
Tags: #99001

Preconditions: Excalidraw is open in the mobile layout on a phone or in a browser window 375 px wide. The canvas contains one text element "Tap me", not underlined.

Steps:
1. Tap "Tap me".
2. Open the properties panel (verify how it opens in the mobile layout).
3. Tap the "Underline" toggle.

Expected result:
- The "Underline" toggle is visible and reachable in the properties panel.
- After step 3, "Tap me" is underlined and the toggle shows as pressed.

# Text in shapes and on arrows

## TC-12 Underline on text inside a shape
Action: create
Area: Text in shapes and on arrows
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a rectangle about 160 px wide with the text "Check whether the uploaded file exceeds the size limit" inside it, wrapped onto several lines, not underlined.

Steps:
1. Click the rectangle.
2. Click the "Underline" toggle.

Expected result:
- Every wrapped line of the text has its own underline, as wide as that line.
- The line breaks are the same as before step 2.
- The rectangle's width, height, stroke and fill are unchanged.
- No underline crosses the rectangle border.

## TC-13 Underline on an arrow label
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
- After step 2, the label "yes" is underlined, and the arrow line is not underlined, thicker or otherwise changed.
- After step 4, the label "yes" stays at the middle of the arrow and is still underlined.

## TC-14 Underline on a sticky note label with auto-fit
Action: create
Area: Text in shapes and on arrows
Priority: Low · Type: functional
Tags: #99001

Preconditions: The canvas contains a sticky note made with the "Sticky note" tool, with the label "Follow up with the design team about the new onboarding flow" at font size Very large, shown smaller than Very large because it does not fit the note.

Steps:
1. Click the sticky note.
2. Click the "Underline" toggle.

Expected result:
- Every line of the label is underlined.
- The underline matches the size at which the label is shown, not the size of Very large text.
- The label's shown size and line breaks are the same as before step 2.

# Styles, copies and history

## C-011 Copy styles and paste styles between text elements
Action: update C-011
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red underlined text "Source" at font size Large in the normal font, and a black text "Target" at font size Medium in the hand-drawn font, not underlined.

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

Preconditions: The canvas contains one text element "Undo me" at font size Medium, not underlined.

| Change in step 2 | State before | State after |
|---|---|---|
| Under "Font size", click "Large" | font size Medium | font size Large |
| Click the "Underline" toggle | not underlined | underlined |

The rows cover an existing style change and the new underline toggle.

Steps:
1. Click "Undo me".
2. Make the change given in the row.
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back in the row's "State before" after a single undo.
- After step 4, "Undo me" is in the row's "State after" again.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Action: update C-013
Area: Styles, copies and history
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains a red underlined text "Hypothesis H1" at font size Large.

| Way to copy |
|---|
| Ctrl+C, then Ctrl+V on the same canvas |
| Ctrl+D |
| Alt+drag (Option+drag on macOS) |
| "Add to library", then insert the item from the library |

The rows are every way of copying an element.

Steps:
1. Click "Hypothesis H1".
2. Copy it the way given in the row.

Expected result:
- The copy reads "Hypothesis H1" and is red, at font size Large, and underlined.
- The original is unchanged.

# Files, sharing and export

## C-014 Text style kept after a page reload
Action: update C-014
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains a red underlined text "Survives reload" at font size Large in the normal font.

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, at font size Large, in the normal font, underlined, at the same position.

## C-015 Text style kept in a saved .excalidraw file
Action: update C-015
Area: Files, sharing and export
Priority: High · Type: functional
Tags: #99001

Preconditions: The canvas contains a red underlined text "Saved style" at font size Large in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

Expected result:
- "Saved style" is red, at font size Large, in the normal font, underlined, at the same position.

## TC-15 File saved before underline existed opens with no underline
Action: create
Area: Files, sharing and export
Priority: Medium · Type: regression
Tags: #99001

Preconditions: A .excalidraw file saved with a version of Excalidraw from before underline was added contains a red text "Legacy note" at font size Large. The canvas is empty.

Steps:
1. Open the main menu and choose "Open".
2. Pick the older file.
3. Click "Legacy note".

Expected result:
- The file opens without an error.
- "Legacy note" has no underline and is red, at font size Large, at the same position as when it was saved.
- The "Underline" toggle shows as not pressed.

## C-016 Text in a PNG export matches the canvas
Action: update C-016
Area: Files, sharing and export
Priority: Medium · Type: functional
Tags: #99001

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors; one red two-line text among them is underlined.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- The underlined text has an underline under each of its lines, red like the text and at the same place as on the canvas; the other texts have no underline.
- No character is cut off at the image edges.

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
- The text in the normal font is underlined as on the canvas; the text in the hand-drawn font has no underline.

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
- User B sees "Shared note" in red and underlined without reloading.