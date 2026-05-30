'use strict';

let pipWindow = null;

function loadPipWindow (newWindow) {
  pipWindow = newWindow;

  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = 'Some text';

  const buttonEl = document.createElement('p');
  buttonEl.textContent = 'Some button';
  paragraphEl.appendChild(buttonEl);

  pipWindow.document.appendChild(paragraphEl);
}

function togglePiP () {
  return
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

chrome.action.onClicked.addListener(togglePiP);
