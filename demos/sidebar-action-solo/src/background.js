'use strict';

if (chrome.action) {
  chrome.action.onClicked.addListener(() => {
    console.log('Test');
  });
}
