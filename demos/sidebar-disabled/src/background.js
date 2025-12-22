'use strict';

chrome.sidePanel.setOptions({
  enabled: false,
  path: '/options.html',
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
