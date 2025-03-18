(function () {
  'use strict';

  chrome.browserAction.onClicked.addListener(() => {
    chrome.windows.getAll((allWindows) => {
      chrome.tabs.create({
        url: 'https://www.apple.com/',
        windowId: allWindows[1].id,
      });
    });
  });
}());
