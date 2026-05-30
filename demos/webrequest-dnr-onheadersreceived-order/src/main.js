'use strict';

const URL_PREFIX = 'https://httpbin.org/anything/webrequest-dnr-onheadersreceived-order/';

const HEADER_NAME = 'etag';

const DNR_TYPES = ['static', 'dynamic', 'session', 'unmatched'];

const hasFieldSizing = CSS.supports('field-sizing', 'content');

const textareaEl = document.getElementById('results');
textareaEl.value = '';

function logToPage (message) {
  textareaEl.value += message + '\n';

  if (!hasFieldSizing) {
    textareaEl.style.height = 'auto';
    textareaEl.style.height = textareaEl.scrollHeight + 'px';
  }
}

function registerWebRequestListener (eventName) {
  chrome.webRequest[eventName].addListener((details) => {
    const type = details.url.replace(URL_PREFIX, '').split('?')[0];
    const headerData = details.responseHeaders.find((header) => {
      return header.name.toLowerCase() === HEADER_NAME;
    });
    const headerValue = headerData && headerData.value;
    const hasMatch = headerValue === type;

    logToPage(`${eventName} for ${type} is ${hasMatch ? 'modified' : 'NOT modified'}, value: ${headerValue}`);
  }, {
    urls: ['<all_urls>'],
  }, ['responseHeaders']);
}

registerWebRequestListener('onHeadersReceived');
registerWebRequestListener('onResponseStarted');

function initRequests () {
  DNR_TYPES.forEach((type) => {
    const url = URL_PREFIX + type + '?time=' + Date.now();

    const headerEl = document.createElement('h2');
    headerEl.textContent = type;
    document.body.appendChild(headerEl);

    const iframeEl = document.createElement('iframe');
    iframeEl.src = url;
    document.body.appendChild(iframeEl);
  });
}

setTimeout(initRequests, 1e3);
