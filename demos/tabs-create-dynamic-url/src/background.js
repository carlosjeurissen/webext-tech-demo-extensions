'use strict';

function openDemo () {
  const dynamicUrl = chrome.runtime.getURL('main.html');
  const fixedUrl = chrome.runtime.getURL('background.js').replace('background.js', 'main.html');

  chrome.tabs.create({
    url: fixedUrl,
  });

  if (dynamicUrl !== fixedUrl) {
    chrome.tabs.create({
      url: dynamicUrl,
    });
  }
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);
