'use strict';

function openDemo () {
  chrome.tabs.create({
    url: 'https://example.com/?query=1',
  });

  chrome.tabs.create({
    url: 'https://example.com/query/',
  });
}

chrome.runtime.onInstalled.addListener(openDemo);
chrome.runtime.onStartup.addListener(openDemo);
chrome.action.onClicked.addListener(openDemo);
