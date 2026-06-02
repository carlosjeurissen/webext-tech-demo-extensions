'use strict';

function requestTogglePiP () {
  chrome.runtime.sendMessage({
    action: 'toggle_pip',
  });
}

async function assureOffscreenDocument (hasActiveRequest) {
  const hasDocument = await chrome.offscreen.hasDocument();
  if (hasDocument) return false;

  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'Test Picture-in-Picture behaviour in offscreen documents',
  });

  if (hasActiveRequest) {
    requestTogglePiP();
  }
}

assureOffscreenDocument(false);

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(() => {
  requestTogglePiP();
  assureOffscreenDocument(true);
});
