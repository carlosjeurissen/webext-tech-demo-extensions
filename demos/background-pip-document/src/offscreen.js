'use strict';

let pipWindow = null;

function loadPipWindow (newWindow) {
  console.log('Loading PiP dom elements');
  pipWindow = newWindow;

  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = 'Some text';

  const buttonEl = document.createElement('p');
  buttonEl.textContent = 'Some button';
  paragraphEl.appendChild(buttonEl);

  pipWindow.document.body.appendChild(paragraphEl);
  console.log('Finalised PiP dom elements');
}

function togglePiP () {
  if (pipWindow) {
    console.log('Closing PiP');
    pipWindow.close();
    pipWindow = null;
  } else {
    console.log('Opening PiP');
    window.documentPictureInPicture.requestWindow({
      width: 400,
      height: 300,
    }).then(loadPipWindow, (e) => {
      console.error('Failed opening PiP', e);
    });
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'toggle_pip') {
    togglePiP();
  }
});
