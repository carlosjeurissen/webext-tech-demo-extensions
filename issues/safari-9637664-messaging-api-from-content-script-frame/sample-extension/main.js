'use strict';

chrome.runtime.onMessage.addListener((message) => {
  document.body.textContent = 'success';
});
