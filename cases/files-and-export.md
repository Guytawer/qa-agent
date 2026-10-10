# Files, sharing and export

Product area: Files and export

## C-014 Text style kept after a page reload
Priority: High · Type: functional

Preconditions: The canvas contains a red text "Survives reload" at font size Large in the normal font.

Steps:
1. Reload the browser tab.

Expected result:
- "Survives reload" is still red, at font size Large, in the normal font, at the same position.

## C-015 Text style kept in a saved .excalidraw file
Priority: High · Type: functional

Preconditions: The canvas contains a red text "Saved style" at font size Large in the normal font.

Steps:
1. Open the main menu and choose "Save to...".
2. Save the file.
3. Open the main menu and choose "Reset the canvas", then confirm.
4. Open the main menu and choose "Open".
5. Pick the saved file.

Expected result:
- "Saved style" is red, at font size Large, in the normal font, at the same position.

## C-016 Text in a PNG export matches the canvas
Priority: Medium · Type: functional

Preconditions: The canvas contains texts in the hand-drawn and the normal font, at different sizes and colors.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "PNG".
3. Open the downloaded file.

Expected result:
- Each text has the same font, size, color and line breaks as on the canvas.
- No character is cut off at the image edges.

## C-017 SVG export renders the same fonts on another computer
Priority: Medium · Type: functional

Preconditions: The canvas contains a text in the hand-drawn font and a text in the normal font. A second computer has neither font installed.

Steps:
1. Open the main menu and choose "Export image...".
2. Click "SVG".
3. Open the SVG in a browser on the second computer.

Expected result:
- Both texts render in the same fonts as on the canvas.

## C-018 Style changes reach other users in live collaboration
Priority: Medium · Type: functional

Preconditions: Users A and B are in the same live collaboration session in two browsers. The canvas contains a black text "Shared note".

Steps:
1. As user A, click "Shared note".
2. As user A, under "Stroke", click the red color.
3. As user B, look at "Shared note".

Expected result:
- User B sees "Shared note" in red without reloading.
