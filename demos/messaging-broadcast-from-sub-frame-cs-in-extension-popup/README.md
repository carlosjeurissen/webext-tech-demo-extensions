# messaging-broadcast-from-sub-frame-cs-in-extension-popup

### Setup
Make sure permission to https://www.example.com/ is granted

The extension will open the action popup, which contains an iframe with https://www.example.com/test

There is a content script for this subframe which tries to broadcasting an extension message.

If the background page successfully receives the message, it will open a success page in a new tab.

### WebKit bug 246620 - message not sent
Because there is no tab, Safari fails sending the message with the error:
`Tab not found`

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246620

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/9637664

Apple Developer Forums post:
https://developer.apple.com/forums/thread/690249

Apple radar:
rdar://83280648

### WebKit bug 314550 - chrome.runtime.sendMessage misses lastError
With this code:
```js
chrome.runtime.sendMessage('test', () => {
  if (chrome.runtime.lastError) {
    reject();
  } else {
    resolve();
  }
});
````

Safari does not define lastError, yet logs this to the console:
Error: Unchecked `runtime.lastError`: Invalid call to `runtime.sendMessage()`. Tab not found.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=314550

Radar:
rdar://problem/176784505

Tested on Safari Version 26.4 (21624.1.16.11.4)

### Orion bug - message not sent
https://orionfeedback.org/d/12399-extension-messages-sent-by-an-action-popup-are-not-received-by-the-extension-background-page
