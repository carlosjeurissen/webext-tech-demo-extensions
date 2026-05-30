'use strict';

const URL_PREFIX = 'https://httpbin.org/anything/webrequest-for-frames-in-extension-pages/';

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
  try {
    chrome.webRequest[eventName].addListener((details) => {
      logToPage(`${eventName} fired`);
    }, {
      urls: [URL_PREFIX + '*'],
    });
  } catch (e) {
    console.error(e);
  }
}

function loadFrame () {
  const url = URL_PREFIX + '?time=' + Date.now();

  const iframeEl = document.createElement('iframe');
  iframeEl.src = url;
  document.body.appendChild(iframeEl);
}

webRequestListeners.forEach(registerWebRequestListener);

setTimeout(loadFrame, 1e3);
