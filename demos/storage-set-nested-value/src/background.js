'use strict';

chrome.storage.local.set({
  topLevel: {
    subLevelA: 1,
    subLevelB: 2,
  },
}, () => {
  chrome.storage.local.set({
    topLevel: {
      subLevelB: 3,
    },
  }, () => {
    chrome.storage.local.get(null, console.log);
  });
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
