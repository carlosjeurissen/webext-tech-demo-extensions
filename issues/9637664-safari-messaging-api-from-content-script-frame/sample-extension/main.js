'use strict';

chrome.runtime.onMessage.addListener(function (message) {
  document.body.textContent = 'success';
});
