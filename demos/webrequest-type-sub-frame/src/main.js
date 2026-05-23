'use strict';

const DEMO_URL = 'https://httpbin.org/anything/webrequest-type-sub-frame/demo';

const EVENT_SCHEMA = {
  onBeforeRequest: ['requestBody'],
  onBeforeSendHeaders: ['requestHeaders'],
  onSendHeaders: ['requestHeaders'],
  onHeadersReceived: ['responseHeaders'],
  onResponseStarted: ['responseHeaders'],
  onCompleted: ['responseHeaders'],
  onBeforeRedirect: ['responseHeaders'],
  onAuthRequired: ['responseHeaders'],
};

const hasFieldSizing = CSS.supports('field-sizing', 'content');
const textareaEl = document.getElementById('results');
textareaEl.textContent = '';

function logToPage (message) {
  textareaEl.value += message + '\n';

  if (!hasFieldSizing) {
    textareaEl.style.height = 'auto';
    textareaEl.style.height = textareaEl.scrollHeight + 'px';
  }
}

function loadDemo () {
  const iframeEl = document.getElementById('iframe');
  iframeEl.src = DEMO_URL;
}

Object.keys(EVENT_SCHEMA).forEach((eventName) => {
  if (!chrome.webRequest[eventName]) return;

  const infoSpecifications = [...EVENT_SCHEMA[eventName]];

  try {
    chrome.webRequest[eventName].addListener(
      (details) => {
        logToPage(`${eventName} type: ${details.type}`);
      },
      { urls: [DEMO_URL] },
      infoSpecifications.length > 0 ? infoSpecifications : undefined,
    );
  } catch (error) {
    logToPage(`error with ${eventName}: ${error.message}`);
  }
});

const demoDelay = 2e3; // assure above events are registered
setTimeout(loadDemo, demoDelay);
