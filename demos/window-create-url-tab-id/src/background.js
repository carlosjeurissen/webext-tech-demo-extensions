'use strict';

let createdTabId = -1;

function openDemo () {
  chrome.windows.create({
    type: 'popup',
    url: chrome.runtime.getURL('blank.html'),
  }, (newWindow) => {
    createdTabId = newWindow.tabs[0].id;
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

chrome.tabs.onReplaced.addListener((addedTabId, removedTabId) => {
  if (removedTabId !== createdTabId) return;

  createdTabId = -1;

  chrome.tabs.update(addedTabId, {
    url: chrome.runtime.getURL('error.html'),
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (tabId !== createdTabId) return;
  if (changeInfo.status !== 'complete') return;

  createdTabId = -1;

  chrome.tabs.update(tabId, {
    url: chrome.runtime.getURL('success.html'),
  });
});

openDemo();

chrome.action.onClicked.addListener(openDemo);
