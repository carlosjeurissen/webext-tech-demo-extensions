# action-popup-open-from-background

## Issues

### Vivaldi
Vivaldi currently gives the error:
"Uncaught (in promise) Error: Browser window has no toolbar."

When calling chrome.action.openPopup()

Calling with windowId gives the same error. Even tho the browser has a toolbar.

See: https://forum.vivaldi.net/topic/120020/action.openpopup-does-not-work/2
And: VB-120122
