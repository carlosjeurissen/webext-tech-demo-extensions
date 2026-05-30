# background-pip-document
This demo showcases the use of document PiP in background pages and offscreen documents

Chrome currently fails to process the user gesture from the extension messaging
Firefox simply crashes all extension pages when calling documentPictureInPicture.requestWindow from a background script.
Safari does not support document PiP as of may 2026.

### Links

W3C WECG issue:
https://github.com/w3c/webextensions/issues/848
