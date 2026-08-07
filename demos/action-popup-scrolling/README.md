# action-popup-scrolling

## Issues

### WebKit
Sometimes the popup opens in a weird state during which:
- scrolling is not smooth
- focus shifting does not scroll viewport
- window.scrollTo is a no-op

If this state can't be reproduced, try reloading the extension and try opening the popup again.

See:
https://bugs.webkit.org/show_bug.cgi?id=320810
