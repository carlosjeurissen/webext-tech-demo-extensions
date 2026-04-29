'use strict';

// trigger permission prompts
fetch('https://www.example.com');
fetch('https://www.example.org');

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2],
  addRules: [
    {
      id: 1,
      priority: 2,
      condition: {
        requestDomains: ['www.example.com'],
        resourceTypes: ['main_frame'],
      },
      action: {
        type: 'allowAllRequests',
      },
    },
    {
      id: 2,
      priority: 1,
      condition: {
        requestDomains: ['www.example.com', 'www.example.org'],
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
