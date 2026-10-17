# webrequest-dnr-onbeforesendheaders-order
This demo creates an extension page which loads pages in an iframe.
It also sets DNR rules and listens for webRequest.

### Inconsistency DNR / webRequest order
The modified version by DNR in chrome is reported in Firefox and Safari in both onBeforeSendHeaders and onSendHeaders.
While in Chrome only reported on onSendHeaders.

For Orion, this demo currently fails due to webRequest events not fired as described in:
https://jeurissen.co/webext-demos/webrequest-for-frames-in-extension-pages

W3C issue:
https://github.com/w3c/webextensions/issues/1004

Firefox bug report:
https://bugzilla.mozilla.org/show_bug.cgi?id=2040251
