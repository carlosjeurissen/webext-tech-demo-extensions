'use strict';

function loadDemo () {
  chrome.tabs.create({
    url: 'https://example.com/extension-background-document-loaded',
  });
}

loadDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(loadDemo);
