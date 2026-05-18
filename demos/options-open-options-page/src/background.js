'use strict';

function openDemo () {
  chrome.runtime.openOptionsPage();
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);
