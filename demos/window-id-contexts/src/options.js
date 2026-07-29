'use strict';

let currentWindowId;

try {
  chrome.windows.getCurrent((windowInfo) => {
    currentWindowId = windowInfo && windowInfo.id;
    document.getElementById('ref-current').value = currentWindowId;
  });
} catch {}

try {
  chrome.windows.getLastFocused((windowInfo) => {
    document.getElementById('ref-lastfocussed').value = windowInfo && windowInfo.id;
  });
} catch {}

new Promise((resolve) => {
  chrome.action.openPopup(() => {
    resolve();
  });
}).catch(() => {}).then(() => {
  return browser.sidebarAction.open();
}).catch(() => {})
  .then(() => {
    return chrome.sidePanel.open({
      windowId: currentWindowId,
    });
  })
  .catch(() => {})
  .then(() => {
    setTimeout(() => {
      try {
        chrome.runtime.sendMessage({
          method: 'ping',
        }, (response, b, c, d) => {
          console.log('PINGRESPONSE', response, b, c, d);
          if (response.method !== 'pong') return;
          const path = response.path;
          const finalValue = response.data.join('\n');
          if (/popup/.test(path)) {
            document.getElementById('ref-popup-response').value = finalValue;
          } else if (/sidebar/.test(path)) {
            document.getElementById('ref-sidebar-response').value = finalValue;
          } else if (/sidepanel/.test(path)) {
            document.getElementById('ref-sidepanel-response').value = finalValue;
          }
        });

        chrome.runtime.onMessage.addListener((message, sender) => {
          if (message.method !== 'pong') return;
          const path = message.path;
          const senderWindowId = sender && sender.windowId;
          const finalData = [senderWindowId].concat(message.data);
          const finalValue = finalData.join('\n');
          if (/popup/.test(path)) {
            document.getElementById('ref-popup-send').value = finalValue;
          } else if (/sidebar/.test(path)) {
            document.getElementById('ref-sidebar-send').value = finalValue;
          } else if (/sidepanel/.test(path)) {
            document.getElementById('ref-sidepanel-send').value = finalValue;
          }
        });
      } catch {}

      chrome.runtime.getContexts({}).then((contexts) => {
        console.log(contexts);
        contexts.forEach((info) => {
          const type = info.contextType;
          const windowId = info.windowId;
          if (type === 'POPUP') {
            document.getElementById('ref-popup-context').value = windowId;
          } else if (type === 'SIDE_PANEL') {
            document.getElementById('ref-sidepanel-context').value = windowId;
          } else if (/BAR/.test(type)) {
            document.getElementById('ref-sidebar-context').value = windowId;
          }
        });
      });
    }, 1e3);
  });
