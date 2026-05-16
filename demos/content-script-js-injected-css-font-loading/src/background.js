'use strict';

function openDemo () {
  chrome.tabs.create({
    url: 'https://cookicons.co/',
  });
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

// trigger site permission prompt on safari
fetch('https://cookicons.co/');
