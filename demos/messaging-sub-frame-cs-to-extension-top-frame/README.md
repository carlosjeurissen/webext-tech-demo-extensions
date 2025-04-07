### Setup
top frame is extension page
sub frame is third party website with extension content script

Broadcasting a message from the extension content script is not picked up by the extension top frame in Safari. While it is in Chrome and Firefox.

### Demo
Click action icon. This opens the extension page with a third party iframe which broadcasts a message. If the top frame receives the message, it sets the body text to "success". This currently only happens in Chrome and Firefox.

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246620

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/9637664

Apple Forum post:
https://developer.apple.com/forums/thread/690249

Apple radar:
rdar://83280648
