'use strict';

function openDemo () {
  chrome.tabs.create({
    url: 'https://example.com/',
  });
}

chrome.runtime.onInstalled.addListener(openDemo);
chrome.runtime.onStartup.addListener(openDemo);
chrome.action.onClicked.addListener(openDemo);
