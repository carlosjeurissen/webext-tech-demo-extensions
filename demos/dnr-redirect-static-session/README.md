### Setup
extension has a dnr which opens www.example.nl
it also has a static redirect rule with high priority to www.example.org/correct
and a session rule with low priority to www.example.com/incorrect

### Issue
Safari prioritises the session rule (example.com) even tho it has a lower priority.
Chrome, Firefox and Orion all properly redirect to example.org.

### Links
https://github.com/EFForg/SafariWebExtensionBugs/issues/3

https://feedbackassistant.apple.com/feedback/16607998

