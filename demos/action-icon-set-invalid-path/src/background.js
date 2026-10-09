'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});

chrome.action.setIcon({
  path: 'override.png',
}, function () {
  try {
    chrome.action.setIcon({
      path: 'invalid.png',
    }, () => {
      const lastError = chrome.runtime.lastError;
      if (lastError) {
        console.log('action.setIcon async runtime.lastError', lastError);
      }
    });
  } catch(e) {
    console.log('action.setIcon sync error', e);
  }
});
