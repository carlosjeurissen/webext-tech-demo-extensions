'use strict';

document.getElementById('ref-loadtime').textContent = `Loaded: ${Date.now()}`;

let currentWindowId = -2;
chrome.windows.getCurrent((currentWindowInfo) => {
  const potentialWindowId = currentWindowInfo.id;
  if (typeof potentialWindowId === 'number' && potentialWindowId !== -1) {
    currentWindowId = potentialWindowId;
  }
});

document.getElementById('ref-sidebar-open').addEventListener('click', () => {
  chrome.sidebarAction.open({
    windowId: currentWindowId,
  });
});

document.getElementById('ref-sidebar-close').addEventListener('click', () => {
  chrome.sidebarAction.close({
    windowId: currentWindowId,
  });
});

document.getElementById('ref-sidebar-toggle').addEventListener('click', () => {
  chrome.sidebarAction.toggle({
    windowId: currentWindowId,
  });
});

document.getElementById('ref-sidepanel-open').addEventListener('click', () => {
  chrome.sidePanel.open({
    windowId: currentWindowId,
  });
});

document.getElementById('ref-sidepanel-close').addEventListener('click', () => {
  chrome.sidePanel.close({
    windowId: currentWindowId,
  });
});

document.getElementById('ref-sidepanel-toggle').addEventListener('click', () => {
  chrome.sidePanel.toggle({
    windowId: currentWindowId,
  });
});

let potentialPromise = chrome.sidePanel.getLayout((panelLayout) => {
  document.getElementById('ref-layout').textContent = JSON.stringify(panelLayout, null, 2);
});

if (potentialPromise) {
  potentialPromise.then((panelLayout) => {
    document.getElementById('ref-layout').textContent = 'This browser does not support callback syntax on getLayout. '
     + JSON.stringify(panelLayout, null, 2);
  });
}
