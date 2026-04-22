'use strict';

const baseUrl = 'https://example.com/';

const bc = new BroadcastChannel('extension');

bc.addEventListener('message', (event) => {
  console.log('[background] received:', event.data.from, event.data.time);
});

setInterval(() => {
  bc.postMessage({
    from: 'background',
    time: Date.now(),
  });
}, 5000);

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

chrome.tabs.create({
  url: `${baseUrl}page`,
});

chrome.tabs.create({
  url: chrome.runtime.getURL('page.html'),
});

fetch(baseUrl);
