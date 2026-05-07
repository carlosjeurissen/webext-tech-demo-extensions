'use strict';

function injectedMessagingScript (extensionId) {
  try {
    browser.runtime.sendMessage(extensionId, 'ping');
  } catch (e) {
    chrome.runtime.sendMessage(extensionId, 'ping');
    console.error('browser namespace missing', e);
  }
}

function executeScriptInTab (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    world: 'MAIN',
    func: injectedMessagingScript,
    args: [chrome.runtime.id],
  });
}

function loadDemo () {
  chrome.tabs.create({
    url: 'https://www.example.com/',
  }, (tab) => {
    setTimeout(executeScriptInTab, 1e3, tab);
  });
}

chrome.runtime.onMessageExternal.addListener((message) => {
  if (message === 'ping') {
    chrome.tabs.create({
      url: 'https://www.example.org/success',
    });
  }
});

loadDemo();

// trigger permission prompt
fetch('https://www.example.com/');

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(loadDemo);
