# options-open-options-page

## Issues

### WebKit
Safari does not focus existing options pages when calling runtime.openOptionsPage.
This is supposed to be one of the benefits of this method.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=315024

Apple Radar:
rdar://problem/177344808

### Edge on Android
calling `runtime.openOptionsPage()` is a no-op without thrown error. See:
https://github.com/microsoft/MicrosoftEdge-Extensions/issues/578
