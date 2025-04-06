'use strict';

function logMessage (text) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = text;
  document.body.appendChild(paragraphEl);
}

const sessionId = (Date.now() + Math.random()).toString(36).replace('.', '_');

chrome.runtime.onMessage.addListener((message, sender, sendMessage) => {
  if (message.startsWith(sessionId)) {
    logMessage('Received message: ' + message);
    sendMessage(message + '_response');
  }
});

setTimeout(() => {
  const broadcastMessage = sessionId + '_top_broadcast';
  chrome.runtime.sendMessage(broadcastMessage, (response) => {
    logMessage('Received response: ' + response);
  });

  const targetedMessage = sessionId + '_top_targeted';
  chrome.tabs.getCurrent((currentTabInfo) => {
    const tabId = currentTabInfo.id;
    chrome.tabs.sendMessage(tabId, targetedMessage, (response) => {
      logMessage('Received response: ' + response);
    });
  });
}, 1000);

const frameEl = document.createElement('iframe');
frameEl.src = chrome.runtime.getURL('/sub.html') + '#' + sessionId;
frameEl.style.width = '90%';
frameEl.style.height = '250px';
document.body.appendChild(frameEl);
