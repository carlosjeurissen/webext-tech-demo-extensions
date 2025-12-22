'use strict';

chrome.tabs.create({
  url: chrome.runtime.getURL('/options.html'),
});

chrome.sidePanel.setOptions({
  enabled: true,
  path: '/options.html',
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
