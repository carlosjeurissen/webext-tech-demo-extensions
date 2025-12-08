'use strict';

document.getElementById('ref-popup-restore').addEventListener('click', () => {
  chrome.action.setPopup({ popup: null });
});

document.getElementById('ref-popup-remove').addEventListener('click', () => {
  chrome.action.setPopup({ popup: '' });
});

document.getElementById('ref-popup-set').addEventListener('click', () => {
  chrome.action.setPopup({ popup: 'popup.html' });
});

document.getElementById('ref-popup-set-invalid').addEventListener('click', () => {
  chrome.action.setPopup({ popup: 'invalid.html' });
});
