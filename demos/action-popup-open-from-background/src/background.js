'use strict';

function openPopup () {
  chrome.action.openPopup();
  chrome.windows.getLastFocused((windowInfo) => {
    const lastWindowId = windowInfo.id;
    chrome.windows.update(lastWindowId, {
      focused: true,
    }, () => {
      chrome.action.openPopup({
        windowId: lastWindowId,
      });
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

openPopup();
