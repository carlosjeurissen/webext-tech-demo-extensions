'use strict';

function getIconObject (color) {
  const result = {};
  for (let i = 1; i <= 512; i++) {
    result[i] = `/icons/${color}-${i}.png`;
  }
  return result;
}

chrome.action.onClicked.addListener(() => {
  chrome.notifications.create('notification', {
    type: 'basic',
    icon: '/icons/blue-96.png',
    title: 'icon-sizes',
    message: 'blue: supports icon, red color: no icon support.',
  });
});

function loadContextMenu () {
  chrome.contextMenus.create({
    title: 'icon-sizes',
    contexts: ['all'],
    id: 'menu',
    icons: getIconObject('blue'),
  });
}

chrome.runtime.onStartup.addListener(loadContextMenu);
chrome.runtime.onInstalled.addListener(loadContextMenu);
