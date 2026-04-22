'use strict';

const bc = new BroadcastChannel('extension');
const logsEl = document.getElementById('logs');

function logToPage (message) {
  console.log(message);
  logsEl.textContent += `${message}
`;
}

function sendMessage () {
  bc.postMessage({
    from: 'popup',
    time: Date.now(),
  });
}

bc.addEventListener('message', (event) => {
  logToPage(`[popup] ${event.data.from} at ${event.data.time}`);
});

setTimeout(sendMessage, 500);
setInterval(sendMessage, 5e3);

setTimeout(() => {
  document.querySelector('iframe').src = 'https://example.com/popup';
}, 500);
