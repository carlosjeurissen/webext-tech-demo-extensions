Frames are complying differently towards the frame-src of CSP in different browsers.

### Issue links

WECG issue: https://github.com/w3c/webextensions/issues/982

Chrome issue: https://issues.chromium.org/issues/40205611

### Setup

Given the following scenario:

    Extension has a content script registered for website X
    Website X has an CSP of frame-src youtube.com
    Website X has an iframe set to youtube.com/embed/x
    Extension navigates frame to youtube-nocookie.com/embed/x

### Result

Chrome/Edge navigate the frame to youtube-nocookie.com even tho it does not comply with the page CSP. Subsequent navigations by the iframed document will again result in CSP compliance unless it is initiated by the extensions isolated world content script.

Firefox/Safari/Orion do not allow the navigation to youtube-nocookie.com//embed/x, strictly complying with the page CSP.
