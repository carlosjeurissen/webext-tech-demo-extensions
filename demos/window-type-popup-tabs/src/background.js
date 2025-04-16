'use strict';

chrome.action.onClicked.addListener((tab) => {
  chrome.windows.create({
    type: 'popup',
  }, (windowInfo) => {
    chrome.tabs.create({
      url: 'https://www.playxylo.com',
      windowId: windowInfo.id,
    });
  });
});
