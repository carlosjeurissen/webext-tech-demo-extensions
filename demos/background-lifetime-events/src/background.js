'use strict';

function addListener(methodName) {
  if (chrome.runtime[methodName]) {
    chrome.runtime[methodName].addListener((details) => {
      console.log(methodName + ' fired', details);
      chrome.tabs.create({
        url: 'about:blank#' + methodName + ',' + encodeURIComponent(JSON.stringify(details)),
      });
    });
  } else {
    console.log(methodName + ' unsupported');
  }
}

addListener('onInstalled'); // See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
addListener('onStartup'); // See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
addListener('onEnabled'); // See https://github.com/w3c/webextensions/blob/main/proposals/runtime_on_load_on_enabled_events.md
addListener('onExtensionLoaded'); // See https://github.com/w3c/webextensions/blob/main/proposals/runtime_on_load_on_enabled_events.md
