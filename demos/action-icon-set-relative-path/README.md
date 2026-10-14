# action-icon-set-relative-path
When setting a custom green icon with a relative path from a non-base-url extension page:
```js
chrome.action.setIcon({
  path: 'override.png',
});
```

Some browsers make it relative to the extension page instead of to the extension.

If the icon is green/hollow, the browser resolves the path relative to the extension-base manifest location.
If the icon is yellow/checker pattern, the browser resolves the path relative to the extension page.
If the icon is red/solid, the setIcon call failed completely and the manifest default is used.
