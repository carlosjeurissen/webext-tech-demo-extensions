"use strict";

const demoUrl = 'https://www.example.nl/door-sidn/';

// trigger safari permission prompt
fetch(demoUrl);

function openDemo () {
  chrome.tabs.create({
    url: demoUrl,
  });
}

chrome.declarativeNetRequest.updateSessionRules({
  removeRuleIds: [2],
  addRules: [{
    id: 2,
    priority: 1,
    action: {
      type: 'redirect',
      redirect: {
        url: 'https://www.example.com/incorrect',
      },
    },
    condition: {
      urlFilter: '||example.nl*',
      resourceTypes: [
        'main_frame',
      ],
    },
  }],
}).then(openDemo, console.error);

chrome.runtime.onInstalled.addListener(openDemo);
chrome.runtime.onStartup.addListener(openDemo);
chrome.action.onClicked.addListener(openDemo);
