'use strict';

const videoEl = document.getElementById('media');
videoEl.src = chrome.runtime.getURL('video.mp4');
videoEl.addEventListener('error', console.error);

function togglePiP () {
  if (videoEl.paused) {
    // stage 1
    videoEl.play();
  } else if (!document.pictureInPictureElement) {
    // stage 2
    videoEl.requestPictureInPicture();
  } else {
    // stage 3
    videoEl.pause();
    document.exitPictureInPicture();
  }
}

chrome.action.onClicked.addListener(togglePiP);
