'use strict';

function openDemo () {
  chrome.runtime.openOptionsPage(() => {
    chrome.action.openPopup();
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

openDemo();
