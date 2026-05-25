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

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.browserAction.onClicked.addListener(openDemo);

setTimeout(() => {
  chrome.browserAction.openPopup();
}, 1e3);
