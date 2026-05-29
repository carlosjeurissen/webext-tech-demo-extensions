'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
chrome.action.setBadgeText({
  text: '8🧩',
});
chrome.action.setBadgeBackgroundColor({
  color: 'green',
});
chrome.action.setBadgeTextColor({
  color: 'green',
});
