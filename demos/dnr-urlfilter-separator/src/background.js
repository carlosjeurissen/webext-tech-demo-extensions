'use strict';

// trigger permission prompts
fetch('https://www.example.com');

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2],
  addRules: [{
    id: 1,
    action: {
      type: 'block',
    },
    condition: {
      resourceTypes: ['main_frame'],
      urlFilter: '||www.example.com/special^',
    },
  }, {
    id: 2,
    action: {
      type: 'block',
    },
    condition: {
      resourceTypes: ['main_frame'],
      urlFilter: '||www.example.com/normal',
    },
  }],
}, () => {
  chrome.tabs.create({
    url: 'https://www.example.com/special',
  });
  chrome.tabs.create({
    url: 'https://www.example.com/special/suffix',
  });
  chrome.tabs.create({
    url: 'https://www.example.com/normal',
  });
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
