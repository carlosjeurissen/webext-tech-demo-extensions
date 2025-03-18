(function () {
  'use strict';

  // only run if framed
  if (window.top === window) return;

  chrome.runtime.sendMessage('test');
}());
