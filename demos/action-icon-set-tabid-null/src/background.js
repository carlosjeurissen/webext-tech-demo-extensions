'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
chrome.action.setIcon({
  path: 'override.png',
  tabId: null,
});
