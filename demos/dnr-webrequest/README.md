# dnr-webrequest
This demo creates an extension page which loads pages in an iframe.
It also sets DNR rules and listens for webRequest.

### Inconsistency DNR / webRequest order
The modified version by DNR in chrome is reported in Firefox and Safari in both onBeforeSendHeaders and onSendHeaders.
While in Chrome only reported on onSendHeaders.

Due to numerous issues, this demo currently does not work on Orion.

See WECG issue: https://github.com/w3c/webextensions/issues/1004
