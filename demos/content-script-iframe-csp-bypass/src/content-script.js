'use strict';

const frameCol = document.getElementsByTagName('iframe');
for (const frameEl of frameCol) {
  const frameURL = new URL(frame.src);

  // Not www.youtube-nocookie.com frame.
  if (!frame.src || frameURL.hostname !== 'www.youtube-nocookie.com') {
    continue;
  }

  // wwww.youtube-nocookie.com frame, trick CSP
  frameEl.src = frameURL.href;
}
