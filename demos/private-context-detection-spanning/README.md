# private-context-detection-spanning
This demo showcases the extension.inIncognitoContext reported by the browser in incognito: spanning mode

### Inconsistencies
specifically in `incognito: spanning`
Chrome, Orion and Safari always returns false for extension pages
While Firefox returns true if the specific extension context is in a private window

W3C WECG issue:
https://github.com/w3c/webextensions/issues/1026

### Docs
mdn:
https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext

See also:
https://jeurissen.co/webext-demos/private-context-detection-split
