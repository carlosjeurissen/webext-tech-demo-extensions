### Setup
top frame is extension page
sub frame is extension page

### Demo
Click action icon. This opens the extension page with an extension iframe. It then sends messages cross-frame. If frames receives the message, it logs the messages in the frame. This currently only happens in Chrome and Firefox.

### Conclusions

#### Safari
No cross-frame messaging supported at all. See https://bugs.webkit.org/show_bug.cgi?id=246620#c5

#### Chrome
Top frame can not respond to messages sent from the sub frame neither via `runtime.getMessage` nor via `tabs.getMessage`.

#### Firefox
onMessage does not filter out messages sent with `tabs.sendMessage` from the same context

Top frame can not respond to sub frame messages sent with `runtime.getMessage`. It can however respond when these messages are sent with `tabs.sendMessage`.

### Orion
