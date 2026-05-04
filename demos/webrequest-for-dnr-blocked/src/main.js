'use strict';

const demoUrl = 'https://www.example.com/webrequest';

const eventNames = [
  'onBeforeRequest',
  'onBeforeSendHeaders',
  'onSendHeaders',
  'onHeadersReceived',
  'onResponseStarted',
  'onCompleted',
  'onBeforeRedirect',
  'onAuthRequired',
  'onErrorOccurred',
];

const logEl = document.getElementById('log');

eventNames.forEach((eventName) => {
  if (!chrome.webRequest[eventName]) return;

  chrome.webRequest[eventName].addListener(() => {
    logEl.textContent += `\n${eventName}`;
  }, {
    urls: [demoUrl],
  });
});

setTimeout(() => {
  chrome.tabs.create({
    url: demoUrl,
    active: false,
  });
}, 500);
