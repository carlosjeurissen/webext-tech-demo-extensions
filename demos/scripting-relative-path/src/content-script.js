'use strict';

(() => {
  const targetEl = document.body || document.documentElement;
  const noticeEl = document.createElement('div');
  noticeEl.textContent = 'scripting.registerContentScripts injected on ' + (new Date()).toString();
  targetEl.insertBefore(noticeEl, targetEl.firstChild);
})();
