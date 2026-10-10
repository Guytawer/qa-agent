# Files and export

- The main menu has "Open", "Save to...", "Export image..." and "Reset the canvas". (source: excalidraw source at commit 4c00f31 (2026-10-08): excalidraw-app/components/AppMainMenu.tsx default items; locales/en.json buttons.load, buttons.export, buttons.exportImage, buttons.clearReset; accepted 2026-10-10 by maxxx)
- The scene is kept in the browser and survives a page reload. (source: excalidraw source at commit 4c00f31 (2026-10-08): excalidraw-app/data/localStorage.ts (excalidraw.com app); accepted 2026-10-10 by maxxx)
- A saved .excalidraw file stores the size of each text element in its "fontSize" field. (source: excalidraw source at commit 4c00f31 (2026-10-08): element/src/types.ts line 256 (ExcalidrawTextElement.fontSize); accepted 2026-10-10 by maxxx)
