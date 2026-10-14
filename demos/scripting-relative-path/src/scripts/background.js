'use strict';

const DEMO_URL = 'https://www.example.com/webext-demos/scripting-relative-path/demo';

function injectScripts () {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tabInfo) => {
      const tabId = tabInfo.id;
    });
  });
}

function openTabs () {
  chrome.tabs.create({
    url: DEMO_URL,
  }, (tabInfo) => {
    console.log(tabInfo);
    const tabId = tabInfo.id;
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId },
        files: ['execute-script.js'],
      });
      chrome.scripting.insertCSS({
        target: { tabId },
        files: ['insert-css.css'],
      });
    }, 1e3);
  });
}

function openDemo () {
  chrome.scripting.registerContentScripts([{
    id: "main",
    css: ["content-script.css"],
    js: ["content-script.js"],
    matches: ["https://www.example.com/webext-demos/scripting-relative-path/*"],
  }], () => {
    chrome.permissions.request({
      origins: ['https://www.example.com/*'],
    }, openTabs);
  });
}

chrome.action.onClicked.addListener(openDemo);

// trigger permission prompt in Safari
fetch(DEMO_URL);

openDemo();
