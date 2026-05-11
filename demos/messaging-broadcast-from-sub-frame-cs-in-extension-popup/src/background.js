'use strict';

chrome.runtime.onMessage.addListener(() => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('success.html'),
  });
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.openPopup();

/* trigger potential host permission dialogs in safari */
fetch('https://www.example.com/');
