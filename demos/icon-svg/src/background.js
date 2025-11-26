'use strict';

chrome.action.onClicked.addListener(() => {
  chrome.notifications.create('notification', {
    type: 'basic',
    iconPath: '/icon.svg',
    icon: '/icon.svg',
    iconUrl: '/icon.svg',
    title: 'SVG notification icon',
    message: 'SVG notification icon',
  });
});

function loadContextMenu () {
  chrome.contextMenus.create({
    title: 'SVG notification icon',
    contexts: ['all'],
    id: 'menu',
    icons: {
      16: '/icon.svg',
    },
  });
}

chrome.runtime.onStartup.addListener(loadContextMenu);
chrome.runtime.onInstalled.addListener(loadContextMenu);
