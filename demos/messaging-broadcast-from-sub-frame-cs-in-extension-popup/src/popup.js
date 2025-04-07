'use strict';

const permissions = {
  origins: ['https://www.example.com/test*'],
};

chrome.permissions.contains(permissions, (granted) => {
  if (granted) {
    const frameEl = document.createElement('iframe');
    frameEl.src = 'https://www.example.com/test';
    document.body.appendChild(frameEl);
  } else {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = 'Grant permissions and reload';
    buttonEl.addEventListener('click', () => {
      chrome.permissions.request(permissions, () => {
        window.location.reload();
      });
    });
    document.body.appendChild(buttonEl);
  }
});
