'use strict';

const sessionId = (Date.now() + Math.random()).toString(36).replace('.', '_');

const frameEl = document.createElement('iframe');
frameEl.src = 'https://www.example.com/#' + sessionId;
document.body.appendChild(frameEl);

chrome.runtime.onMessage.addListener((message) => {
  if (message === sessionId) {
    document.body.textContent = 'success';
  }
});
