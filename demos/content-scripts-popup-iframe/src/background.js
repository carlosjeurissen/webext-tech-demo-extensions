'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

chrome.tabs.create({
  url: chrome.runtime.getURL('popup.html'),
}, () => {
  chrome.action.openPopup();
});

fetch('https://www.example.com/*');
