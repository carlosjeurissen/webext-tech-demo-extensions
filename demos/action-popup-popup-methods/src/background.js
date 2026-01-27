'use strict';

function openDemo () {
  try {
    chrome.runtime.openOptionsPage();
  } catch (e) {
    console.error(e);
    chrome.tabs.create({
      url: chrome.runtime.getURL('/main.html'),
    });
  }
}

chrome.runtime.onInstalled.addListener(openDemo);
chrome.runtime.onStartup.addListener(openDemo);
