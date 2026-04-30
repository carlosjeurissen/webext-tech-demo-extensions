### Setup
dnr blockrules with both:
www.example.com/normal
and
www.example.com/special^

### Behaviour
Firefox & Chrome block both https://www.example.com/normal as well as https://www.example.com/special and https://www.example.com/special/suffix
Safari & Orion do not block https://www.example.com/special (without any suffix)

### Links
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/RuleCondition#urlfilter
https://github.com/EFForg/SafariWebExtensionBugs/issues/12
