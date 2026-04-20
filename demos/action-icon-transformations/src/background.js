'use strict';

const url = 'https://www.example.com/';

fetch(url);

chrome.tabs.create({
  url: url,
});

const gradientIcons = {
  16: 'gradient-16.png',
  19: 'gradient-19.png',
  32: 'gradient-32.png',
  38: 'gradient-38.png',
};

const unicolorIcons = {
  16: 'unicolor-16.png',
  19: 'unicolor-19.png',
  32: 'unicolor-32.png',
  38: 'unicolor-38.png',
};

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get((storage) => {
    chrome.action.setIcon({
      path: storage.hasGradient ? unicolorIcons : gradientIcons,
    });
    chrome.storage.local.set({
      hasGradient: !storage.hasGradient,
    });
  });
});
