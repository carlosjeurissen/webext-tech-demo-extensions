'use strict';

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('/main.html'),
  });
});
