# action-icon-set-tabid-null
When calling:
```js
chrome.action.setIcon({
  path: 'override.png',
  tabId: null,
});
```

Chrome, Firefox and Orion set a non tab specific icon, as if tabId was not passed
Safari does not consider this valid and throws with:
`Error: Invalid call to action.setIcon(). The 'details' value is invalid, because 'tabId' is expected to be a number, but null was provided.`

See:
https://bugs.webkit.org/show_bug.cgi?id=314725
rdar://problem/176975795
