'use strict';

try {
  chrome.runtime.openOptionsPage();
} catch (e) {
  console.error(e);
  chrome.tabs.create({
    url: chrome.runtime.getURL('main.html'),
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
