'use strict';

function requestTogglePiP () {
  chrome.runtime.sendMessage({
    action: 'toggle_pip',
  });
}

function assureOffscreenDocument () {
  chrome.offscreen.hasDocument().then((hasDocument) => {
    if (hasDocument) return;
    return chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Test Picture-in-Picture behaviour in offscreen documents',
    }).then(requestTogglePiP);
  });
}

chrome.action.onClicked.addListener(() => {
  requestTogglePiP();
  assureOffscreenDocument();
});
