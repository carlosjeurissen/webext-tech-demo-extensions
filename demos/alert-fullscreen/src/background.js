'use strict';

function openTab () {
  chrome.tabs.create({
    url: chrome.runtime.getURL('main.html'),
  });
}

chrome.runtime.onInstalled.addListener(openTab);
chrome.runtime.onStartup.addListener(openTab);
chrome.action.onClicked.addListener(openTab);
