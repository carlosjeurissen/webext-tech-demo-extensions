### Webrequest-for-frames-in-popup

The extension action popup register the different webRequest listeners, and load example.org/randomised into the iframe in the popup. If the listeners are fired, they load the result in the result box. If the listeners are not firing, the results box will say "loading...".

#### Firefox & Chrome
Everything works fine

#### Vivaldi
In Vivaldi, the webRequest listener is never fired for action popups. The result box stays on "loading..." They do however properly fire the listener when the popup is opened in a new tab.

Bugreport issuekey: VB-123605 and VB-82634

Forum post:
https://forum.vivaldi.net/topic/114497/webrequest.onbeforerequest-not-fired-for-subframes-inside-action-popups
https://forum.vivaldi.net/topic/42870/vivaldi-extension-browser-detect/14

#### Safari
Just like Vivaldi, the listener is never fired inside action popups.
See: https://bugs.webkit.org/show_bug.cgi?id=304827

When opened in a new tab, the listener does fire, but it fires with the wrong resource type (main_frame instead of sub_frame).
See: https://bugs.webkit.org/show_bug.cgi?id=304828

#### Orion
Orion currently never fires the listener not even in a new tab.
See: https://orionfeedback.org/d/12846-webrequestonbeforerequest-not-fired-for-subframes-in-extension-pages
