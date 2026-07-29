'use strict';

let currentWindowId;
let lastFocussedWindowId;

try {
  chrome.windows.getCurrent((windowInfo) => {
    currentWindowId = windowInfo && windowInfo.id;
  });
} catch {}

try {
  chrome.windows.getLastFocused((windowInfo) => {
    lastFocussedWindowId = windowInfo && windowInfo.id;
  });
} catch {}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.method !== 'ping') return;

  const senderTab = sender && sender.tab;
  const senderWindowId = senderTab && senderTab.windowId;

  const response = {
    method: 'pong',
    data: [currentWindowId, lastFocussedWindowId, senderWindowId],
    path: window.location.pathname,
  };

  chrome.runtime.sendMessage(response);

  sendResponse(response);
});

document.body.textContent = window.location.pathname;
