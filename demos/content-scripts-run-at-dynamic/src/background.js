'use strict';

const baseUrl = 'https://www.example.com/';

// trigger initial permission prompt in safari
fetch(baseUrl);

chrome.action.onClicked.addListener(() => {
  const id = Date.now().toString();
  const url = baseUrl + id;

  chrome.tabs.create({
    url: url,
  });

  setTimeout(() => {
    chrome.scripting.registerContentScripts([{
      id: `${id}-start`,
      matches: [url],
      js: ['/document-start.js'],
      runAt: 'document_start',
    }, {
      id: `${id}-idle`,
      matches: [url],
      js: ['/document-idle.js'],
      runAt: 'document_idle',
    }, {
      id: `${id}-end`,
      matches: [url],
      js: ['/document-end.js'],
      runAt: 'document_end',
    }]);
  }, 1e3);
});
