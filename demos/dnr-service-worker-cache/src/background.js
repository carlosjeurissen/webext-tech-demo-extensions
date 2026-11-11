'use strict';

// trigger permission prompts
fetch('https://www.example.com');

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {});
