'use strict';

const DEMO_URL = 'https://www.example.com/webext-demos/scripting-executescript-manifest-hoisted/demo';
const DEMO_URL_CONTROL = 'https://www.example.org/webext-demos/scripting-executescript-manifest-hoisted/demo';

function injectScripts () {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tabInfo) => {
      const tabId = tabInfo.id;
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['content-script.js'],
      });
    });
  });
}

function openTabs () {
  chrome.tabs.create({
    url: DEMO_URL,
  }, () => {
    chrome.tabs.create({
      url: DEMO_URL_CONTROL,
    }, () => {
      setTimeout(injectScripts, 1e3);
    });
  });
}

function openDemo () {
  chrome.permissions.request({
    origins: ['https://www.example.com/*'],
  }, openTabs);
}

chrome.action.onClicked.addListener(openDemo);

// trigger permission prompt in Safari
fetch(DEMO_URL);
