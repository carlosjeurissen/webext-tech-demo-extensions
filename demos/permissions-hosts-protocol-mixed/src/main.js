'use strict';

const httpPermission = 'http://www.example.com/*';
const httpsPermission = 'https://www.example.com/*';
const mixedPermission = '*://www.example.com/*';

document.getElementById('http').addEventListener('click', () => {
  chrome.permissions.request({
    origins: [httpPermission],
  }).then(console.log, console.error);
});

document.getElementById('https').addEventListener('click', () => {
  chrome.permissions.request({
    origins: [httpsPermission],
  }).then(console.log, console.error);
});

document.getElementById('mixed').addEventListener('click', () => {
  chrome.permissions.request({
    origins: [mixedPermission],
  }).then(console.log, console.error);
});

document.getElementById('clear').addEventListener('click', () => {
  chrome.permissions.remove({
    origins: [
      httpPermission,
      httpsPermission,
      mixedPermission,
    ],
  }).then(console.log, console.error);
});
