'use strict';

const bc = new BroadcastChannel('extension');
const logsEl = document.getElementById('logs');
const sendButtonEl = document.getElementById('send');

bc.addEventListener('message', (event) => {
  logsEl.textContent += `received: ${event.data.from} at ${event.data.time}
`;
});

sendButtonEl.addEventListener('click', () => {
  bc.postMessage({
    from: 'popup-button',
    time: Date.now(),
  });
});

setTimeout(() => {
  bc.postMessage({
    from: 'popup',
    time: Date.now(),
  });
}, 1e3);
