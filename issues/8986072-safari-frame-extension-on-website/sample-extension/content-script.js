(function () {
  'use strict'

  document.body.textContent = '';

  let frameEl = document.createElement('iframe');
  if (typeof browser !== 'undefined') {
    frameEl.src = browser.runtime.getURL('/frame.html');
  } else {
    frameEl.src = chrome.runtime.getURL('/frame.html');
  }
  document.body.appendChild(frameEl);
})()
