'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

chrome.tabs.create({
  url: 'https://static.kzar.co.uk/youtube-csp-demo/',
});
