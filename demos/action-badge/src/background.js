'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});

chrome.action.setBadgeText({
  text: '8🧩',
});

try {
  chrome.action.setBadgeBackgroundColor({
    color: 'green',
  }, () => {
    const lastError = chrome.runtime.lastError;
    if (lastError) {
      console.log('action.setBadgeBackgroundColor async runtime.lastError', lastError);
    }
  });
} catch (e) {
  console.log('action.setBadgeBackgroundColor sync error', e);
}

try {
  chrome.action.setBadgeTextColor({
    color: 'green',
  }).catch((e) => {
    console.log('action.setBadgeTextColor async runtime.lastError', e);
  });
} catch (e) {
  console.log('action.setBadgeTextColor sync error', e);
}
