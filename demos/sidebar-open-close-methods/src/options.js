'use strict';

document.getElementById('ref-sidepanel-open').addEventListener('click', () => {
  chrome.windows.getCurrent((currentWindowInfo) => {
    chrome.sidePanel.open({
      windowId: currentWindowInfo.id,
    });
  });
});

document.getElementById('ref-sidepanel-close').addEventListener('click', () => {
  chrome.windows.getCurrent((currentWindowInfo) => {
    chrome.sidePanel.close({
      windowId: currentWindowInfo.id,
    });
  });
});

document.getElementById('ref-sidepanel-toggle').addEventListener('click', () => {
  chrome.windows.getCurrent((currentWindowInfo) => {
    chrome.sidePanel.toggle({
      windowId: currentWindowInfo.id,
    });
  });
});

chrome.sidePanel.getLayout((panelLayout) => {
  document.getElementById('ref-layout').textContent = JSON.stringify(panelLayout, null, 2);
});
