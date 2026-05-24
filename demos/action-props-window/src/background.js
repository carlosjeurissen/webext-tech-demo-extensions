'use strict';

function getIsRealWindowId (windowId) {
  return (windowId | 0) === windowId && windowId >= 0;
}

function setActionProps (windowId) {
  if (!getIsRealWindowId(windowId)) return;

  chrome.action.setPopup({
    popup: 'override.html',
    windowId: windowId,
  });
  chrome.action.setIcon({
    path: 'override.png',
    windowId: windowId,
  });
  chrome.action.setTitle({
    title: 'OVERRIDE',
    windowId: windowId,
  });
  chrome.action.setBadgeText({
    text: 'O',
    windowId: windowId,
  });
  chrome.action.setBadgeBackgroundColor({
    color: 'green',
    windowId: windowId,
  });
  chrome.action.setBadgeTextColor({
    color: 'pink',
    windowId: windowId,
  });
}

function checkCurrent () {
  chrome.tabs.query({
    active: true,
  }, (tabList) => {
    tabList.forEach((tabInfo) => {
      setActionProps(tabInfo.windowId);
    });
  });

  chrome.windows.getAll({
    windowTypes: ['normal', 'panel', 'popup'],
  }, (windowList) => {
    windowList.forEach((windowInfo) => {
      setActionProps(windowInfo.id);
    });
  });
}

checkCurrent();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(checkCurrent);

chrome.tabs.onCreated.addListener((tabInfo) => {
  setActionProps(tabInfo.windowId);
});

chrome.windows.onCreated.addListener((windowInfo) => {
  setActionProps(windowInfo.id);
});

chrome.action.setBadgeBackgroundColor({
  color: 'red',
});
