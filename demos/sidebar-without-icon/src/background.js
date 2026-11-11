'use strict';

if (chrome.sidePanel) {
  chrome.tabs.create({
    url: 'https://www.example.com/webext-demos/side-panel-permission-only/success',
  });
} else {
  chrome.tabs.create({
    url: 'https://www.example.com/webext-demos/side-panel-permission-only/missing',
  });
}
