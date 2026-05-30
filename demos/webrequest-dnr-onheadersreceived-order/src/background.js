'use strict';

const URL_PREFIX = 'https://httpbin.org/anything/webrequest-dnr-onheadersreceived-order/';

const HEADER_NAME = 'etag';

const RESOURCE_TYPES = ['sub_frame'];

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [2],
  addRules: [{
    id: 2,
    action: {
      type: 'modifyHeaders',
      responseHeaders: [
        {
          header: HEADER_NAME,
          operation: 'set',
          value: 'dynamic',
        },
      ],
    },
    condition: {
      resourceTypes: RESOURCE_TYPES,
      urlFilter: '||httpbin.org/anything/webrequest-dnr-onheadersreceived-order/dynamic*',
    },
  }],
});

chrome.declarativeNetRequest.updateSessionRules({
  removeRuleIds: [3],
  addRules: [{
    id: 3,
    action: {
      type: 'modifyHeaders',
      responseHeaders: [
        {
          header: HEADER_NAME,
          operation: 'set',
          value: 'session',
        },
      ],
    },
    condition: {
      resourceTypes: RESOURCE_TYPES,
      urlFilter: '||httpbin.org/anything/webrequest-dnr-onheadersreceived-order/session*',
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
  chrome.permissions.request({
    origins: [URL_PREFIX + '*'],
  }, openDemo);
});

// trigger permission prompt in Safari
fetch(URL_PREFIX);
