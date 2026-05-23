# content-scripts-query-matches

## Setup

WebKit does not match on URL queries.

Given the following match pattern for content scripts:
https://example.com/*query*
Which if loaded successful sets the background page to green

The extension opens these pages:
https://example.com/?query=1
https://example.com/query/

Content Scripts should be matched on query. See:
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns

## WebKit Issue
In contrast to other browsers like Chrome, Firefox and Orion, which all match the query
in WebKit, only the second URL goes green. Meaning
https://example.com/?query=1 is not matched against https://example.com/*query*

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=273069

Apple Radar:
rdar://problem/128621567
