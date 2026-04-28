'use strict';

chrome.windows.getCurrent((win) => {
  chrome.windows.update(win.id, { state: 'fullscreen' }, () => {
    setTimeout(() => {
      alert('Test');
    }, 2e3);
  });
});
