The issue has been reported on their Jira issue tracker system under VB-82634.

The issue is also reported on their forum:
https://forum.vivaldi.net/topic/42870/vivaldi-extension-browser-detect



So this is what happens:

We load https://example.com/test in an iframe in the extension popup.

We set a webrequest listener listening on onBeforeRequest before loading the iframe.
This listener is configured to redirect to https://example.com/

This works in Chrome, but fails in Vivaldi. See screenshots

Basically the callback never fires in Vivaldi
