'use strict';

const DEMO_URL = 'https://www.example.com/webrequest-tabs-create/demo';

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

function logToPage (message) {
  const textareaEl = document.getElementById('results');
  textareaEl.value += message + '\n';

  if (!hasFieldSizing) {
    textareaEl.style.height = 'auto';
    textareaEl.style.height = textareaEl.scrollHeight + 'px';
  }
}

function openDemo () {
  chrome.tabs.create({
    active: false,
    url: DEMO_URL,
  });
}

Object.keys(EVENT_SCHEMA).forEach((eventName) => {
  if (!chrome.webRequest[eventName]) return;

  const infoSpecifications = [...EVENT_SCHEMA[eventName]];

  try {
    chrome.webRequest[eventName].addListener(
      (details) => {
        logToPage(eventName, details);
      },
      { urls: [DEMO_URL] },
      infoSpecifications.length > 0 ? infoSpecifications : undefined,
    );
  } catch (error) {
    logToPage(`error with ${eventName}: ${error.message}`);
  }
});

setTimeout(openDemo, 1e3);
