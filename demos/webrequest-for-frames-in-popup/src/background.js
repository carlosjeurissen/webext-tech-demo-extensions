'use strict';

chrome.runtime.onStartup.addListener(() => {});
chrome.runtime.onInstalled.addListener(() => {});
chrome.action.openPopup();

const startUrl = 'https://example.org/';
const endUrl = 'https://example.com/';

/* trigger potential host permission dialogs in safari */
fetch(startUrl);
fetch(endUrl);
