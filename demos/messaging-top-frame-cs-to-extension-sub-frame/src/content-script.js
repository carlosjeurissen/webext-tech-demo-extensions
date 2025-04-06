'use strict';

function logMessage (text) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = text;
  document.body.appendChild(paragraphEl);
}

const frameEl = document.createElement('iframe');
frameEl.src = chrome.runtime.getURL('/frame.html');
frameEl.style.width = '90%';
frameEl.style.height = '250px';
document.body.appendChild(frameEl);

logMessage('EXTENSION CONTENT SCRIPT');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  logMessage(`Receiving message: ${message}`);
  sendResponse(message);
});

setTimeout(() => {
  logMessage('Sending message: broadcastFromTopFrame');
  chrome.runtime.sendMessage('broadcastFromTopFrame', (response) => {
    logMessage(`Response for broadcastFromTopFrame: ${response}`);
  });
}, 1e3);

document.querySelector('div').remove();
