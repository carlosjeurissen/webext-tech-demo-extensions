### Setup
Given an extension which:
opens www.example.nl
has a static redirect rule with high priority to www.example.org/correct
has a session rule with low priority to www.example.com/incorrect

### Issue
Safari prioritises the session rule (example.com) even tho it has a lower priority.
Chrome, Firefox and Orion all properly redirect to example.org.

Tested on macOS 26.4.1 with Safari Version 26.4 (21624.1.16.11.4) and STP Release 242 (WebKit 21625.1.13.19.1).

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=313963

Apple feedback assistant:
https://feedbackassistant.apple.com/feedback/16607998

EFF issue:
https://github.com/EFForg/SafariWebExtensionBugs/issues/3
