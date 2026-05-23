'use strict';

function openDemo () {
  chrome.tabs.create({
    active: false,
    url: 'https://example.com/query/',
  });

  chrome.tabs.create({
    active: true,
    url: 'https://example.com/?query=1',
  });
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

// trigger permission prompt in Safari
fetch('https://example.com/query/?query=1');
