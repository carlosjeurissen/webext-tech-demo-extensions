'use strict';

(() => {
  const inTopFrame = window.top === window.self;
  if (inTopFrame) return;

  const targetEl = document.body || document.documentElement;
  targetEl.textContent = 'Content script loaded';

  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage('test', () => {
      if (chrome.runtime.lastError) {
        reject();
      } else {
        resolve();
      }
    });
  }).catch(() => {
    return browser.runtime.sendMessage('test');
  }).then(() => {
    targetEl.textContent = 'No error thrown with sendMessage';
  }, (e) => {
    const error = (e && e.message) || e;
    targetEl.textContent = `Failed calling sendMessage: ${error}`;
  });
})();
