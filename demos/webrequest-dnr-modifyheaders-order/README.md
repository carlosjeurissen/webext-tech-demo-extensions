# webrequest-dnr-order
This demo creates an extension page which loads pages in an iframe.
It also sets DNR rules and listens for webRequest.

### Inconsistency DNR / webRequest order
The modified version by DNR in chrome is reported in Firefox and Safari in both onBeforeSendHeaders and onSendHeaders.
While in Chrome only reported on onSendHeaders.

For Orion, this demo currently fails. this is tracked in:
https://orionfeedback.org/d/13893-sub-frame-in-extension-pages-do-not-fire-onbeforesendheaders-and-onsendheaders

See WECG issue: https://github.com/w3c/webextensions/issues/1004
