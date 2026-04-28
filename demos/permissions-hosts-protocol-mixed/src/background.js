'use strict';

function openTab () {
  chrome.tabs.create({
    url: chrome.runtime.getURL('main.html'),
  });
}

openTab();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
