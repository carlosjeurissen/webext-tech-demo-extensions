# webrequest-dnr-onheadersreceived-order
This demo creates an extension page which loads pages in an iframe.
It also sets DNR rules and listens for webRequest.

### Inconsistency DNR / webRequest order
The modified version by DNR in chrome is reported in Firefox and Safari in both onHeadersReceived and onResponseStarted.
While in Chrome only reported on onResponseStarted.

For Orion, this demo currently fails due to webRequest events not fired as described in:
https://jeurissen.co/webext-demos/webrequest-for-frames-in-extension-pages

W3C WECG issue:
https://github.com/w3c/webextensions/issues/1004

Firefox bug report:
https://bugzilla.mozilla.org/show_bug.cgi?id=2040251

