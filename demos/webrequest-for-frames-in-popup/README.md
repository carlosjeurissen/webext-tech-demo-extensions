### Webrequest-for-frames-in-popup

The extension action popup registers a webRequest.onBeforeRequest listener, and loads an iframe in the popup. If the listener is fired, it will replace the source of the iframe from the original https://example.org/ to https://example.com/ and loads the registered resource type in the result box.

#### Firefox & Chrome
Everything works fine

#### Vivaldi
In Vivaldi, the webRequest listener is never fired for action popups. They do however properly fire the listener when the popup is opened in a new tab.

Bugreport issuekey: VB-123605 and VB-82634

Forum post:
https://forum.vivaldi.net/topic/114497/webrequest.onbeforerequest-not-fired-for-subframes-inside-action-popups
https://forum.vivaldi.net/topic/42870/vivaldi-extension-browser-detect/14

#### Safari
Just like Vivaldi, the listener is never fired inside action popups.

When opened in a new tab, the listener does fire, but it fires with the wrong resource type (main_frame instead of sub_frame).

#### Orion
The webRequest API is not supported at all currently (2025)
