'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: 'https://www.example.com',
  });
});
