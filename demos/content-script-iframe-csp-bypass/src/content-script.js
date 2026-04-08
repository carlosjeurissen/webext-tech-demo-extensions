'use strict';

const frameCol = document.getElementsByTagName('iframe');
for (const frameEl of frameCol) {
  const frameURL = new URL(frameEl.src);

  // Not www.youtube-nocookie.com frame.
  if (!frameEl.src || frameURL.hostname !== 'www.youtube-nocookie.com') {
    continue;
  }

  // wwww.youtube-nocookie.com frame, trick CSP
  frameEl.src = frameURL.href;
}
