'use strict';

chrome.sidePanel.setOptions({
  enabled: false,
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
