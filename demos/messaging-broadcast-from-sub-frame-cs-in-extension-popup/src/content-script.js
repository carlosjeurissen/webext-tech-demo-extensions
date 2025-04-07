'use strict';

const isTopFrame = window.top === window.self;

if (!isTopFrame) {
  chrome.runtime.sendMessage('test');
}
