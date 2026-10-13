'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});

chrome.action.setBadgeText({
  text: '8🧩',
});

chrome.action.setBadgeBackgroundColor({
  color: 'lime',
}, function () {
  try {
    chrome.action.setBadgeBackgroundColor({
      color: 'INVALID',
    }, () => {
      const lastError = chrome.runtime.lastError;
      if (lastError) {
        console.log('action.setBadgeBackgroundColor async runtime.lastError', lastError);
      }
    });
  } catch(e) {
    console.log('action.setBadgeBackgroundColor sync error', e);
  }
});

chrome.action.setBadgeTextColor({
  color: 'red',
}).then(function () {
  try {
    chrome.action.setBadgeTextColor({
      color: 'INVALID',
    }).catch(function (e) {
      console.log('action.setBadgeTextColor async runtime.lastError', e);
    });
  } catch(e) {
    console.log('action.setBadgeTextColor sync error', e);
  }
});
