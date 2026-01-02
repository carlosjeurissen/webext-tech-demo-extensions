'use strict';

chrome.runtime.onStartup.addListener(() => {});
chrome.runtime.onInstalled.addListener(() => {});
chrome.action.openPopup();

/* trigger potential host permission dialogs in safari */
fetch('https://example.org/');
