'use strict';

let pipWindow = null;

function loadPipWindow (newWindow) {
  pipWindow = newWindow;

  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = 'Some text';
  pipWindow.document.appendChild(paragraphEl);

  const buttonEl = document.createElement('p');
  buttonEl.textContent = 'Some button';
  pipWindow.document.appendChild(buttonEl);
}

function togglePiP () {
  if (pipWindow) {
    pipWindow.close();
    pipWindow = null;
  } else {
    window.documentPictureInPicture.requestWindow({
      width: 400,
      height: 300,
    }).then(loadPipWindow);
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggle_pip') {
    togglePiP();
  }
});
