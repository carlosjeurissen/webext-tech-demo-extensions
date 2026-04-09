'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
chrome.tabs.create({
  url: chrome.runtime.getURL('main.html'),
});
