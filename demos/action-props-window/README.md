# action-props-window
This demo showcases window-specific action properties like title, icon and others.

If loaded succesfully, the icon gets a green badge and the icon changes to a green outlined square and a popup is set.

## inconsistencies
Chromium currently does not support per-window properties
while Firefox, Safari and Orion do support per-window properties

## bugs
### WebKit
WebKit currently requires to switch tabs before the window changes are applied.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=315432

Apple Radar:
rdar://problem/177792323

### Firefox Android
Firefox on Android currently breaks the action button. It becomes grey and unclickable.

Mozilla bug report:
https://bugzilla.mozilla.org/show_bug.cgi?id=2042028
