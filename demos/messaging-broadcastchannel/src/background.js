'use strict';

const baseUrl = 'https://example.com/';

const bc = new BroadcastChannel('extension');

bc.addEventListener('message', (event) => {
  console.log('[background] received:', event.data.from, event.data.time);
});

function sendMessage () {
  bc.postMessage({
    from: 'background',
    time: Date.now(),
  });
}

setTimeout(sendMessage, 500);
setInterval(sendMessage, 5e3);

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

chrome.tabs.create({
  url: `${baseUrl}page`,
});

chrome.tabs.create({
  url: chrome.runtime.getURL('page.html'),
});

fetch(baseUrl);
