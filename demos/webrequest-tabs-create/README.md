# webrequest-tabs-create
Safari only fires webRequest.onCompleted for tabs created with the tabs.create API.
While other browsers fire ALL of the webRequest events.
However when you refresh the created page with a user action, Safari DOES list all events.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=315367

Apple Radar:
rdar://problem/177727052

EFF SafariBugs issue:
https://github.com/EFForg/SafariWebExtensionBugs/issues/17
