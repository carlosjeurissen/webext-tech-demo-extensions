'use strict';

chrome.action.onClicked.addListener((tab) => {
  const tabId = tab.id;

  chrome.sidePanel.setOptions({
    tabId: tabId,
    path: `/sidebar.html?tab=${JSON.stringify(tab)}`,
    enabled: true,
  }, () => {
    chrome.sidePanel.open({
      tabId,
    });
  });
});
