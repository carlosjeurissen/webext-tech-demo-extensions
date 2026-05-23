'use strict';

function openDemo () {
  try {
    chrome.runtime.openOptionsPage();
  } catch (e) {
    console.error(e);
    chrome.tabs.create({
      url: chrome.runtime.getURL('main.html'),
    });
  }
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  openDemo();
  chrome.permissions.request({
    origins: ['https://httpbin.org/anything/webrequest-type-sub-frame/*'],
  });
});

openDemo();

// trigger safari permission prompt
fetch('https://httpbin.org/anything/webrequest-type-sub-frame/permission');
