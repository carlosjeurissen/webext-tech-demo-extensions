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
    from: 'page',
    time: Date.now(),
  });
}

bc.addEventListener('message', (event) => {
  logToPage(`[page] ${event.data.from} at ${event.data.time}`);
});

setTimeout(sendMessage, 500);
setInterval(sendMessage, 5e3);

let windowId;
chrome.windows.getCurrent((currentWindowInfo) => {
  windowId = currentWindowInfo.id;
});

document.getElementById('sidebar').addEventListener('click', () => {
  try {
    browser.sidebarAction.open();
  } catch {
    // do nothing
  }

  try {
    chrome.sidePanel.open({
      windowId: windowId,
    });
  } catch {
    // do nothing
  }
});
