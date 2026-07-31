'use strict';

function openDemo () {
  chrome.tabs.create({
    url: chrome.runtime.getURL('main.html'),
  });
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

if (chrome.sidePanel) {
  chrome.sidePanel.setOptions({
    enabled: true,
    path: 'main.html',
  });
}
