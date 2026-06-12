'use strict';

const demoExtensionUrl = chrome.runtime.getURL('main.html');
const demoContentScriptUrl = 'https://www.example.com/webext-demos/private-context-detection-spanning';

function openExtensionPages (windowData) {
  chrome.tabs.create({
    url: demoExtensionUrl,
    windowId: windowData && windowData.id,
  }, () => {
    chrome.runtime.openOptionsPage();
    chrome.action.openPopup();
  });
}

function openDemo () {
  chrome.windows.create({
    incognito: true,
    url: demoContentScriptUrl,
  }, openExtensionPages);
  chrome.windows.create({
    incognito: false,
    url: demoContentScriptUrl,
  }, openExtensionPages);
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

// trigger permission
fetch(demoContentScriptUrl);

openDemo();
