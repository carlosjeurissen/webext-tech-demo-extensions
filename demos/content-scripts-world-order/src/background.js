'use strict';

const baseUrl = 'https://example.com/';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});

chrome.tabs.create({
  url: `${baseUrl}`,
});

fetch(baseUrl);
