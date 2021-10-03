'use strict';

(function () {
  chrome.runtime.onMessage.addListener(function () {
    console.log(arguments);
  });

  chrome.webRequest.onBeforeRequest.addListener(function (details) {
    console.log(arguments);
  }, {
    urls: ['<all_urls>']
  }, ['blocking']);

  chrome.webRequest.onHeadersReceived.addListener(function (details) {
    console.log(arguments);
  }, {
    urls: ['<all_urls>']
  }, ['blocking', 'responseHeaders', 'extraHeaders']);

  chrome.tabs.executeScript(-1, {
    frameId: 0,
    file: '/inject.js'
  }, function () {
    console.log(arguments);
  });
})();
