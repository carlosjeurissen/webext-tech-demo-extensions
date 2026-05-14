'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
chrome.action.setIcon({
  variants: [{
    16: 'override.png',
  }],
});
