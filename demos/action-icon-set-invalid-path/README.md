# action-icon-set-invalid-path
When setting a custom green icon with:
```js
chrome.action.setIcon({
  path: 'override.png',
});
```

Followed by:

```js
chrome.action.setIcon({
  path: 'invalid.png',
});
```

Browsers reset to the manifest default (red), while API-wise it would make more
sense to reject the promise and not change the icon to manifest default.
