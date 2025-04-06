'use strict';

function logMessage (text) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = text;
  document.body.appendChild(paragraphEl);
}

const sessionId = window.location.hash.replace('#', '');

chrome.runtime.onMessage.addListener((message) => {
  if (message.startsWith(sessionId)) {
    logMessage('Received message: ' + message);
  }
});

setTimeout(() => {
  const broadcastMessage = sessionId + '_sub_broadcast';
  chrome.runtime.sendMessage(broadcastMessage, (response) => {
    logMessage('Received response: ' + response);
  });

  const targetedMessage = sessionId + '_sub_targeted';
  chrome.tabs.getCurrent((currentTabInfo) => {
    const tabId = currentTabInfo.id;
    chrome.tabs.sendMessage(tabId, targetedMessage, (response) => {
      logMessage('Received response: ' + response);
    });
  });
}, 1100);
