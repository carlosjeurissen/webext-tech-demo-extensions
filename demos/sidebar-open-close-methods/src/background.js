'use strict';

chrome.tabs.create({
  url: chrome.runtime.getURL('main.html'),
});

chrome.sidePanel.setOptions({
  enabled: true,
  path: 'main.html',
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
