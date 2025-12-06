'use strict';

if (chrome.runtime.onInstalled) {
  // See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
  chrome.runtime.onInstalled.addListener((details) => {
    console.log('onInstalled fired', details);
  });
} else {
  console.log('onInstalled unsupported');
}

if (chrome.runtime.onStartup) {
  // See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
  chrome.runtime.onStartup.addListener((details) => {
    console.log('onStartup fired', details);
  });
} else {
  console.log('onStartup unsupported');
}

if (chrome.runtime.onEnabled) {
  // See https://github.com/w3c/webextensions/blob/main/proposals/runtime_on_load_on_enabled_events.md
  chrome.runtime.onEnabled.addListener((details) => {
    console.log('onEnabled fired', details);
  });
} else {
  console.log('onEnabled unsupported');
}

if (chrome.runtime.onExtensionLoaded) {
  // See https://github.com/w3c/webextensions/blob/main/proposals/runtime_on_load_on_enabled_events.md
  chrome.runtime.onExtensionLoaded.addListener((details) => {
    console.log('onExtensionLoaded fired', details);
  });
} else {
  console.log('onExtensionLoaded unsupported');
}
