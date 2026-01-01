'use strict';

const startUrl = 'https://example.org/';
const endUrl = 'https://example.com/';

const iframeEl = document.createElement('iframe');

chrome.webRequest.onBeforeRequest.addListener((details) => {
  iframeEl.src = endUrl;
  document.getElementById('ref-result-type').textContent = details.type;
}, {
  urls: [startUrl + '*'],
});

setTimeout(() => {
  iframeEl.src = startUrl;
  document.body.appendChild(iframeEl);
}, 500);

document.getElementById('ref-open-in-new').addEventListener('click', () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('/popup.html'),
  });
});
