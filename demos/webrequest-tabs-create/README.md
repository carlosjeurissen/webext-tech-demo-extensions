# webrequest-tabs-create
Safari only fires webRequest.onCompleted for tabs created with the tabs.create API.
While other browsers fire ALL of the webRequest events.
However when you refresh the created page with a user action, Safari DOES list all events.

Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=315367

EFF issue: https://github.com/EFForg/SafariWebExtensionBugs/issues/17
