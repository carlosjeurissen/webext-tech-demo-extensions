# webrequest-for-dnr-blocked
Demo extension has a dnr session block-rule for example.com.
It also registers webRequest event listeners for example.com.

In Chrome and Firefox, webRequest events will fire.
In Safari and Orion, they do not fire.

Tested on macOS 26.4.1 with:
Safari Version 26.4 (21624.1.16.11.4)
STP Release 242 (WebKit 21625.1.13.19.1).
Orion Version 1.0.6 (145), WebKit 624.1.7

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=313971

Apple Radar:
rdar://problem/176177851

Apple Feedback Assistant Report:
https://feedbackassistant.apple.com/feedback/16453819

Orion issue:
https://orionfeedback.org/d/13729-webrequest-events-not-fired-for-dnr-blocked-urls

EFF issue:
https://github.com/EFForg/SafariWebExtensionBugs/issues/4
