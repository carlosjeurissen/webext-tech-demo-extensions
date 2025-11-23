This demo showcases the cross-browser differences with content script host permissions.

If a host permission is only specified as match patterns in the manifest:
Generally speaking extensions can use fetch, get the host from tabs.query, and get it in permissions.getAll

With the exceptions:
1) Chrome does not provide it in tabs.query without activeTab, see https://github.com/w3c/webextensions/issues/915
2) Orion does not list it in permissions.getAll

This has been tested in Chrome, Firefox, Safari and Orion all on desktop mac.
