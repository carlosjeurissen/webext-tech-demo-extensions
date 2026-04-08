'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

if (chrome.webRequest) {
  chrome.tabs.create({
    url: 'https://example.com',
  });
}
