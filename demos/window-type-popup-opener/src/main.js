'use strict';

const windowUrl = chrome.runtime.getURL('window.html');
window.open(windowUrl, null, {
  popup: true,
});

setTimeout(() => {
  chrome.windows.getAll((windowList) => {
    windowList.forEach((windowData) => {
      chrome.tabs.query({
        windowId: windowData.id,
      }, (tabList) => {
        tabList.forEach((tabData) => {
          if (tabData.url !== windowUrl) return;
          document.body.textContent = `resulting window type: ${windowData.type}`;
        });
      });
    });
  });
}, 500);
