'use strict';

const demoBase = 'https://www.example.com/webext-demos/tabs-onupdated-filter-properties-url/';

function setBodyText (message) {
  document.body.textContent = message;
}

function writeMessage (tabId, message) {
  setTimeout(() => {
    chrome.scripting.executeScript({
      target: {
        tabId,
      },
      func: setBodyText,
      args: [message],
    });
  }, 1e3);
}

function hasInvalidProperty (changeInfo) {
  if (!changeInfo || typeof changeInfo !== 'object') return false;

  const keys = Object.keys(changeInfo);
  if (keys.length === 0) return false;

  if (keys.length > 1) return true;
}

function openDemo () {
  chrome.tabs.create({
    url: demoBase + 'start',
  }, (tabInfo) => {
    const tabId = tabInfo && tabInfo.id;

    try {
      let encounteredError = false;
      chrome.tabs.onUpdated.addListener((changedTabId, changeInfo) => {
        if (changedTabId !== tabId) return;
        if (encounteredError) return;
        if (!changeInfo || typeof changeInfo !== 'object') {
          encounteredError = true;
          writeMessage(tabId, 'changeInfo is missing or not an object');
          return;
        }
        const keys = Object.keys(changeInfo);
        if (keys.length === 0) {
          encounteredError = true;
          writeMessage(tabId, 'changeInfo has no properties');
          return;
        }
        if (keys.length > 1 || keys[0] !== 'url') {
          encounteredError = true;
          writeMessage(tabId, 'changeInfo has properties other than the filter');
          return;
        }

        writeMessage(tabId, 'tabs.onUpdated recorded an url change successfully');
      }, {
        properties: ['url'],
      });
    } catch (e) {
      writeMessage(tabId, 'registering tabs.onUpdated gave the following exception: ' + e.message);
    }

    chrome.tabs.update(tabId, {
      url: demoBase + 'updated',
    });
  });
}

openDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

fetch(demoBase);
