'use strict';

chrome.runtime.onMessage.addListener(() => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('success.html'),
  });
});
