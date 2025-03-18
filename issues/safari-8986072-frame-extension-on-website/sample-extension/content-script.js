(function () {
  'use strict';

  document.body.textContent = '';

  const frameUrl = typeof browser !== 'undefined'
    ? browser.runtime.getURL('/frame.html')
    : chrome.runtime.getURL('/frame.html');

  const frameEl = document.createElement('iframe');
  frameEl.src = frameUrl;
  document.body.appendChild(frameEl);
}());
