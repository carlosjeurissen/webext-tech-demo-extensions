'use strict';

chrome.storage.local.get({
  prop: { sub_prop: 'success' },
}, (result) => {
  if (result.prop.sub_prop !== 'success') return;
  chrome.tabs.create({
    url: 'https://www.example.com/webext-demos/storage-get-defaults/success',
  });
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
