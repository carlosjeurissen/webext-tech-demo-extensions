### Setup
dnr blockrules with both:
www.example.com/normal
and
www.example.com/special^

### Behaviour
Firefox & Chrome block both https://www.example.com/normal as well as https://www.example.com/special and https://www.example.com/special/suffix
Safari & Orion do not block https://www.example.com/special (without any suffix)

Tested on macOS 26.4.1 with Safari Version 26.4 (21624.1.16.11.4) and STP Release 242 (WebKit 21625.1.13.19.1)

### Links
Documentation:
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#urlfilter

Orion issue:
https://orionfeedback.org/d/13709-dnr-urlfilter-with-separator-not-matching-end-of-url

Apple Feedback Assistant Report:
https://feedbackassistant.apple.com/feedback/21161264

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=297838

WebKit PR:
https://github.com/WebKit/WebKit/pull/56662

EFF safari bugs issue:
https://github.com/EFForg/SafariWebExtensionBugs/issues/12
