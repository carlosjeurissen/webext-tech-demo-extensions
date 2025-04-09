'use strict';

chrome.action.onClicked.addListener(() => {
  chrome.notifications.create('notification', {
    type: 'basic',
    iconUrl: '/icons/purple.png',
    title: 'action-icon-variants',
    message: 'purple: supports iconUrl, other color: no iconUrl support.',
  });
});

function loadContextMenu () {
  chrome.contextMenus.create({
    title: 'action-icon-variants',
    contexts: ['all'],
    id: 'menu',
    icons: {
      16: '/icons/purple.png',
    },
  });
}

chrome.runtime.onStartup.addListener(loadContextMenu);
chrome.runtime.onInstalled.addListener(loadContextMenu);
