'use strict';

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.openPopup();

/* trigger potential host permission dialogs in safari */
fetch('https://example.org/');
