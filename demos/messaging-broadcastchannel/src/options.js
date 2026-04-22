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
    from: 'options',
    time: Date.now(),
  });
}

bc.addEventListener('message', (event) => {
  logToPage(`[options] ${event.data.from} at ${event.data.time}`);
});

setTimeout(sendMessage, 500);
setInterval(sendMessage, 5e3);

setTimeout(() => {
  document.querySelector('iframe').src = 'https://example.com/options';
}, 500);
