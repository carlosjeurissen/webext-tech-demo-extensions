# background-pip-document
This demo showcases the use of document PiP in background pages and offscreen documents

Chrome does handle the createPiP calls, and allows adding dom content, pretending there is a window. However the window is never fully created and is not visible in `windows.getAll()` and also not in `tabs.query()`.

Firefox simply crashes all extension pages when calling documentPictureInPicture.requestWindow from a background script.
Safari does not support document PiP as of may 2026.

### Links

W3C WECG issue:
https://github.com/w3c/webextensions/issues/848
