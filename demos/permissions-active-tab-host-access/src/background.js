'use strict';

function openTab () {
  chrome.tabs.create({
    url: 'https://www.example.com/',
  });
}

chrome.runtime.onInstalled.addListener(openTab);
chrome.runtime.onStartup.addListener(openTab);
