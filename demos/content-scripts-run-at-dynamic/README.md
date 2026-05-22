# content-scripts-run-at-dynamic

Inconsistency:
When calling chrome.scripting.registerContentScripts,
- Chrome, Firefox, Orion(Chrome) and Orion(Safari) require reload of existing pages
- Safari injects content scripts into existing pages right when calling the method

WebKit bug:
https://bugs.webkit.org/show_bug.cgi?id=297903
