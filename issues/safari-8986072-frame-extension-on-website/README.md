### Issue description
Trying to put a view (html page) from a web extension into an iframe on a website. The html file is listed correctly in web_accessible_resources, however when you trying to load it, It will give the following error:
`Failed to load resource: The operation couldn’t be completed. (Cocoa error -1008.)`
or
`Failed to load resource: You do not have permission to access the requested resource.`

### Links
Demo extension:
https://jeurissen.co/webext-demos/messaging-top-frame-cs-to-extension-sub-frame

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246617

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/8986072

Apple Developer Forums post:
https://developer.apple.com/forums/thread/672746

Apple radar:
rdar://73826149
