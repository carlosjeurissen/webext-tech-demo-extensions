### Setup
top frame is extension page
sub frame is extension page

### Demo
Click action icon. This opens the extension page with an extension iframe. It then sends messages cross-frame. If frames receives the message, it logs the messages in the frame. This currently only happens in Chrome and Firefox.

### Conclusions

#### Safari
No cross-frame messaging supported at all

#### Chrome
Top frame can not respond to sub frame

#### Firefox
onMessage does not filter out messages sent with chrome.tabs.sendMessage from the same context

Top frame can only respond when messages are send with chrome.tabs.sendMessage
