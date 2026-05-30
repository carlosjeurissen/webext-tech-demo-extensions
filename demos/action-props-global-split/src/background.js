'use strict';

function setActionProps () {
  const inPrivate = chrome.extension.inIncognitoContext;

  chrome.action.setIcon({
    path: inPrivate ? 'icon.png' : 'override.png',
  });
  chrome.action.setTitle({
    title: inPrivate ? 'private' : 'non private',
  });
  chrome.action.setBadgeText({
    text: inPrivate ? 'P' : 'O',
  });
  chrome.action.setBadgeBackgroundColor({
    color: inPrivate ? 'purple' : 'green',
  });
  chrome.action.setBadgeTextColor({
    color: inPrivate ? 'pink' : 'orange',
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(setActionProps);

setActionProps();
