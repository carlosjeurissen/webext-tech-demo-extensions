'use strict';

function openDemo () {
  chrome.action.openPopup();
}

chrome.runtime.onInstalled.addListener(openDemo);
chrome.runtime.onStartup.addListener(openDemo);
