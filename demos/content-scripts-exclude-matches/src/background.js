'use strict';

function registerContentScript () {
  chrome.scripting.registerContentScripts([{
    id: 'content-script',
    matches: ['https://*.example.com/*'],
    excludeMatches: ['https://www.example.com/*'],
    js: ['/content-script.js'],
    runAt: 'document_idle',
  }]);
}

chrome.runtime.onInstalled.addListener(registerContentScript);
