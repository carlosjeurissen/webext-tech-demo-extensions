### Setup
top frame is extension page opened as action popup
sub frame is third party website with extension content script

Broadcasting a message from the extension content script fails in Safari and Orion. While it is successful in Chrome and Firefox.

### Demo
Open the action popup and grant host permissions if needed.

The popup will create an iframe for example.com. The extension loads a content script which tries to run `runtime.sendMessage`. If successful, the background script will open a new tab stating "message received". If not, nothing happens.

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246620

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/9637664

Apple Developer Forums post:
https://developer.apple.com/forums/thread/690249

Apple radar:
rdar://83280648
