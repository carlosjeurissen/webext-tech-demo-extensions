# action-browser-popup-methods
mv2 version of action-popup-popup-methods

The demo calls `browserAction.openPopup()` on running the background page.

### inconsistencies
Chrome requires userGesture for `browser.openPopoup()`, while Firefox and Safari do not.
