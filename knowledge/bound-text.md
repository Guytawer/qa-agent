# Bound text

- Double-clicking a shape adds text inside it; the text wraps to the shape width and the shape grows taller when needed. (source: excalidraw source at commit 4c00f31 (2026-10-08): element/src/textElement.ts lines 120-126 grow the container height; arrows excluded; accepted 2026-10-10 by maxxx)
- A new arrow label starts at the middle of the arrow and keeps its position along the arrow when the arrow moves. (source: excalidraw source at commit 4c00f31 (2026-10-08): components/App.text.ts line 815 (DEFAULT_BOUND_TEXT_LABEL_POSITION), element/src/linearElementEditor.ts lines 2099-2125; accepted 2026-10-10 by maxxx)
