'use strict';

function logPermissions () {
  chrome.permissions.getAll(console.log);
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(logPermissions);

logPermissions();
