# Styles, copies and history

Product area: Editor > Clipboard and history

## C-011 Copy styles and paste styles between text elements
Priority: Medium · Type: functional

Preconditions: The canvas contains a red text "Source" at font size Large in the normal font, and a black text "Target" at font size Medium in the hand-drawn font.

Steps:
1. Click "Source".
2. Press Ctrl+Alt+C (Cmd+Option+C on macOS) to copy styles.
3. Click "Target".
4. Press Ctrl+Alt+V (Cmd+Option+V on macOS) to paste styles.

Expected result:
- "Target" is red, at font size Large, in the normal font.
- The text of "Target" is unchanged.

## C-012 Undo and redo of a style change
Priority: High · Type: functional

Preconditions: The canvas contains one text element "Undo me" at font size Medium.

Steps:
1. Click "Undo me".
2. Under "Font size", click "Large".
3. Press Ctrl+Z (Cmd+Z on macOS).
4. Press Ctrl+Shift+Z (Cmd+Shift+Z on macOS).

Expected result:
- After step 3, "Undo me" is back at Medium after a single undo.
- After step 4, "Undo me" is at Large again.
- The text content and position stay the same throughout.

## C-013 Copies keep the style of the original
Priority: Medium · Type: functional

Preconditions: The canvas contains a red text "Hypothesis H1" at font size Large.

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
- The copy reads "Hypothesis H1" and is red at font size Large.
- The original is unchanged.
