'use strict';

const startUrl = 'https://example.org/';

const iframeEl = document.getElementById('ref-iframe');
const resultsEl = document.getElementById('ref-results');
const openInNewEl = document.getElementById('ref-open-in-new');

const filter = {
  urls: [
    startUrl + '*',
  ],
};

const webRequestListeners = [
  'onBeforeRequest',
  'onHeadersReceived',
  'onAuthRequired',
  'onBeforeRedirect',
  'onBeforeSendHeaders',
  'onCompleted',
  'onErrorOccurred',
  'onResponseStarted',
  'onSendHeaders',
];

let currentResults = '';

function appendResults (title, result) {
  currentResults += title + ' - ' + JSON.stringify(result, null, 2) + '\n\n\n';
  resultsEl.value = currentResults;
}

webRequestListeners.forEach((eventName) => {
  chrome.webRequest[eventName].addListener((details) => {
    appendResults(eventName, details);
  }, filter);
});

setTimeout(() => {
  const randomId = Math.random().toString().replace('0.', Date.now());
  iframeEl.src = startUrl + randomId;
}, 500);

openInNewEl.addEventListener('click', () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('/popup.html'),
  });
});
