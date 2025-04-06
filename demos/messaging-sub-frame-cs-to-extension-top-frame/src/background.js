'use strict';

chrome.action.onClicked.addListener(() => {
  chrome.permissions.request({
    origins: ['<all_urls>'],
  });
  chrome.tabs.create({
    url: chrome.runtime.getURL('/top.html'),
  });
});
