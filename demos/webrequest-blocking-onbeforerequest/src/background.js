'use strict';

const DEMO_BASE = 'https://www.example.com/webext-demos/webrequest-blocking-onbeforerequest';
const DEMO_URL = `${DEMO_BASE}/demo`;
const DEMO_MATCHES = [`${DEMO_BASE}/*`];

function openDemo () {
  chrome.tabs.create({
    url: DEMO_URL,
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  chrome.permissions.request({
    origins: DEMO_MATCHES,
  }, openDemo);
});

// trigger safari permission prompt
fetch(DEMO_URL);

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    return { cancel: true };
  },
  {
    urls: DEMO_MATCHES,
  },
  ['blocking'],
);

openDemo();
