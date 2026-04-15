'use strict';

const url = 'https://www.example.com/';

fetch(url);

chrome.tabs.create({
  url: url,
});

const dualIcons = {
  "16": "dual-16.png",
  "19": "dual-19.png",
  "32": "dual-32.png",
  "38": "dual-38.png"
};

const singleIcons = {
  "16": "single-16.png",
  "19": "single-19.png",
  "32": "single-32.png",
  "38": "single-38.png"
};

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get((storage) => {
    chrome.action.setIcon({
      path: storage.hasDualIcon ? singleIcons : dualIcons,
    });
    chrome.storage.local.set({
      hasDualIcon: !storage.hasDualIcon,
    });
  });
});
