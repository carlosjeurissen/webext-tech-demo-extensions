'use strict';

function openDemo () {
  chrome.tabs.create({
    url: 'https://www.example.com/webext-demos/action-without-declaration/success',
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);
