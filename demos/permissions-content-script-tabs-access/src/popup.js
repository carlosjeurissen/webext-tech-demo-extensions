function logToBody (message) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = message;
  document.body.appendChild(paragraphEl);
}

chrome.tabs.query({
  active: true,
  currentWindow: true,
}, (result) => {
  logToBody('tabs.query.url:' + result[0].url);
});

fetch('https://www.example.com/').then((result) => {
  logToBody('fetch:' + result.status);
}, (e) => {
  logToBody('fetch:' + e);
});

chrome.permissions.getAll((result) => {
  logToBody('permissions:' + JSON.stringify(result, null, 2));
});
