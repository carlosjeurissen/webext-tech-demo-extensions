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

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [{
    id: 1,
    action: {
      type: 'block',
    },
    condition: {
      urlFilter: 'example.com',
      resourceTypes: ['main_frame'],
    },
  }],
}).then(openDemo);

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

// trigger permission dialog
fetch('https://www.example.com/');
