'use strict';

function getContextType (pathname) {
  if (pathname.endsWith('popup.html')) return 'extension popup';
  if (pathname.endsWith('options.html')) return 'options page';
  if (pathname.endsWith('main.html')) return 'extension page';
  return 'content script';
}

const contextType = getContextType(window.location.pathname);
const privateContext = chrome.extension.inIncognitoContext;
const privateDescription = privateContext ? 'private/incognito context' : 'regular context';

document.body.textContent = `With incognito:split, from ${contextType}, extension.inIncognitoContext gives ${privateContext}, this is a ${privateDescription}`;
