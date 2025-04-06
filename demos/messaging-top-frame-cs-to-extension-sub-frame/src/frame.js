'use strict';

function logMessage (text) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = text;
  document.body.appendChild(paragraphEl);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  logMessage(`Receiving message: ${message}`);
  sendResponse(message);
});
