'use strict';

document.getElementById('ref-popup-restore').addEventListener('click', () => {
  chrome.browserAction.setPopup({ popup: null });
});

document.getElementById('ref-popup-remove').addEventListener('click', () => {
  chrome.browserAction.setPopup({ popup: '' });
});

document.getElementById('ref-popup-set').addEventListener('click', () => {
  chrome.browserAction.setPopup({ popup: 'popup.html' });
});

document.getElementById('ref-popup-set-invalid').addEventListener('click', () => {
  chrome.browserAction.setPopup({ popup: 'invalid.html' });
});

document.getElementById('ref-popup-open').addEventListener('click', () => {
  chrome.browserAction.openPopup();
});
