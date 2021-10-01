(function () {
  'use strict';

  chrome.browserAction.onClicked.addListener(function () {
    chrome.windows.getAll(function (allWindows) {
      chrome.tabs.create({
        url: 'https://www.apple.com/',
        windowId: allWindows[1].id
      });
    });
  });
})();
