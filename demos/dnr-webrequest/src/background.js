'use strict';

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [2],
  addRules: [{
    id: 2,
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          header: 'user-agent',
          operation: 'set',
          value: 'dynamic',
        },
      ],
    },
    condition: {
      resourceTypes: ['main_frame', 'sub_frame'],
      urlFilter: '||httpbin.org/anything/dnr-webrequest/dynamic*',
    },
  }],
});

chrome.declarativeNetRequest.updateSessionRules({
  removeRuleIds: [3],
  addRules: [{
    id: 3,
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          header: 'user-agent',
          operation: 'set',
          value: 'session',
        },
      ],
    },
    condition: {
      resourceTypes: ['main_frame', 'sub_frame'],
      urlFilter: '||httpbin.org/anything/dnr-webrequest/session*',
    },
  }],
});

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

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  openDemo();
  chrome.permissions.request({
    origins: ['https://httpbin.org/anything/dnr-webrequest/*'],
  });
});

fetch('https://httpbin.org/anything/dnr-webrequest/');
