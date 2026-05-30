'use strict';

const demoUrl = chrome.runtime.getURL('main.html');

function openDemo () {
  chrome.windows.create({
    incognito: true,
    url: demoUrl,
  });
  chrome.windows.create({
    incognito: false,
    url: demoUrl,
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

openDemo();
