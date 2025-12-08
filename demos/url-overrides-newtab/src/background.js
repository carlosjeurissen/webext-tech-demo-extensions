'use strict';

chrome.tabs.create({
  url: chrome.runtime.getURL('/newtab.html?env=background'),
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
