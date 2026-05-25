'use strict';

const alreadyAppliedIds = new Set();

function getIsRealTabId (tabId) {
  return (tabId | 0) === tabId && tabId >= 0;
}

function setActionProps (tabId) {
  if (!getIsRealTabId(tabId)) return;
  if (alreadyAppliedIds.has(tabId)) return;
  alreadyAppliedIds.add(tabId);

  chrome.action.setPopup({
    popup: 'override.html',
    tabId: tabId,
  });
  chrome.action.setIcon({
    path: 'override.png',
    tabId: tabId,
  });
  chrome.action.setTitle({
    title: 'OVERRIDE',
    tabId: tabId,
  });
  chrome.action.setBadgeText({
    text: 'O',
    tabId: tabId,
  });
  chrome.action.setBadgeBackgroundColor({
    color: 'green',
    tabId: tabId,
  });
  chrome.action.setBadgeTextColor({
    color: 'pink',
    tabId: tabId,
  });
}

function checkCurrent () {
  chrome.tabs.query({}, (tabList) => {
    tabList.forEach((tabInfo) => {
      setActionProps(tabInfo.id);
    });
  });
}

checkCurrent();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(checkCurrent);

chrome.tabs.onCreated.addListener((tabInfo) => {
  setActionProps(tabInfo.id);
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  setActionProps(tabId);
  setActionProps(tabInfo.id);
});

chrome.action.setBadgeBackgroundColor({
  color: 'red',
});
