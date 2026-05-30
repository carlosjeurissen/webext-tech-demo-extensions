'use strict';

function getContextType () {
  return new Promise(function (resolve, reject) {
    chrome.windows.getCurrent((result) => {
      const inPrivate = result && result.incognito;
      if (typeof inPrivate === 'boolean') {
        resolve(inPrivate);
      } else {
        reject(new Error('failed'));
      }
    });
  }).catch(() => {
    return Boolean(chrome.extension.inIncognitoContext);
  });
}

function setActionProps () {
  getContextType().then((inPrivate) => {
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
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(setActionProps);

setActionProps();
