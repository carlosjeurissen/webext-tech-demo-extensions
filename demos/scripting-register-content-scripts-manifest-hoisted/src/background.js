'use strict';

const DEMO_URL = 'https://www.example.com/webext-demos/scripting-register-content-scripts-manifest-hoisted/demo';

function openDemo () {
  chrome.tabs.create({
    url: DEMO_URL,
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

chrome.scripting.registerContentScripts([{
  id: '1',
  js: ['content-script.js'],
  matches: ['https://www.example.com/*'],
}], openDemo);

chrome.permissions.getAll(console.log);

// trigger permission prompt in Safari
fetch(DEMO_URL);
