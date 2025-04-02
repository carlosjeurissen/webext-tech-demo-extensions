'use strict';

document.querySelector('button').addEventListener('click', () => {
  chrome.tabs.query({
    currentWindow: true,
    active: false,
  }, (result) => {
    const firstInactiveTab = result[0];
    chrome.tabs.update(firstInactiveTab.id, {
      active: true,
    });
  });
});
