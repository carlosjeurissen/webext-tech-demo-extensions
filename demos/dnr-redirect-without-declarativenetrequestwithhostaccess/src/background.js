'use strict';

// trigger permission prompts
fetch('https://www.example.com');

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      condition: {
        requestDomains: ['www.example.com'],
        resourceTypes: ['main_frame'],
      },
      action: {
        type: 'redirect',
        redirect: { url: 'https://www.google.com' },
      },
    },
  ],
}, () => {
  chrome.tabs.create({
    url: 'https://www.example.com',
  });
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
