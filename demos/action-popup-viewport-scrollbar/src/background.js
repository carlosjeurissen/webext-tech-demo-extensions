'use strict';

function openPopup () {
  chrome.action.openPopup();
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});

openPopup();
