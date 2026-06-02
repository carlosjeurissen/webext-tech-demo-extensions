# private-context-detection

Demos showcases the extension.inIncognitoContext reported by the browser

Demo with incognito: spanning (default)
https://jeurissen.co/webext-demos/private-context-detection-spanning

Demo with incognito: split
https://jeurissen.co/webext-demos/private-context-detection-split

### Issues
Chrome always returns false in `incognito: spanning` mode.
Orion and Safari always return true independent of incognito mode.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=315916

Apple Radar:
rdar://problem/178327590

Orion issue:
https://orionfeedback.org/d/13941-extensioninincognitocontext-incorrectly-reports-false

W3C WECG issue:
TBD

### Docs
mdn:
https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/extension/inIncognitoContext
