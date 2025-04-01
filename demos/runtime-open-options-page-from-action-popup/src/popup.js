'use strict';

document.querySelector('button').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});
