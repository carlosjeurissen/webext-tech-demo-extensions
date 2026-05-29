'use strict';

const STORAGE_ID_HAS_GRADIENT = 'hasGradient';

const DEMO_URL = 'https://www.example.com/';

const ICONS_GRADIENT = {
  16: 'gradient-16.png',
  19: 'gradient-19.png',
  32: 'gradient-32.png',
  38: 'gradient-38.png',
};

const ICONS_UNICOLOR = {
  16: 'unicolor-16.png',
  19: 'unicolor-19.png',
  32: 'unicolor-32.png',
  38: 'unicolor-38.png',
};

// trigger safari permission prompt
fetch(DEMO_URL);

chrome.tabs.create({
  url: DEMO_URL,
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get(STORAGE_ID_HAS_GRADIENT, (storage) => {
    chrome.action.setIcon({
      path: storage[STORAGE_ID_HAS_GRADIENT] ? ICONS_UNICOLOR : ICONS_GRADIENT,
    });
    const toSet = {};
    toSet[STORAGE_ID_HAS_GRADIENT] = !storage[STORAGE_ID_HAS_GRADIENT];
    chrome.storage.local.set(toSet);
  });
});
