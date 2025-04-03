### Chrome
Issue: Sending response from extension frame to content script gives undefined

### Firefox
Issue: Sending response from extension frame to content script gives undefined

Issue: Not receiving any messages from same tab

Issue: chrome.tabs is not available in extension frame See https://github.com/w3c/webextensions/issues/787

### Safari
Framing does not work at all.
Trying to put a view (html page) from a web extension into an iframe on a website. The html file is listed correctly in web_accessible_resources, however when you trying to load it, It will give the following error:
Failed to load resource: The operation couldn’t be completed. (Cocoa error -1008.)

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246617

Apple Feedback assistant report:
https://feedbackassistant.apple.com/feedback/8986072

Apple Forum post:
https://developer.apple.com/forums/thread/672746

