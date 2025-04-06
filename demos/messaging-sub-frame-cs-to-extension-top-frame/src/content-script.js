'use strict';

const sessionId = window.location.hash.replace('#', '');

setTimeout(() => {
  chrome.runtime.sendMessage(sessionId);
}, 500);
