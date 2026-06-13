'use strict';

function getContextType (pathname) {
  if (pathname.endsWith('popup.html')) return 'extension popup';
  if (pathname.endsWith('options.html')) return 'options page';
  if (pathname.endsWith('main.html')) return 'extension page';
  if (pathname.endsWith('embed.html')) return 'embed page';
  return 'content script';
}

const contextType = getContextType(window.location.pathname);
const privateContext = chrome.extension.inIncognitoContext;
const privateDescription = privateContext ? 'private/incognito context' : 'regular context';

document.body.textContent = `With incognito:spanning (default), from ${contextType}, extension.inIncognitoContext gives ${privateContext}, this is a ${privateDescription}`;

if (contextType === 'content script') {
  const iframeEl = document.createElement('iframe');
  iframeEl.src = chrome.runtime.getURL('embed.html');
  document.body.appendChild(iframeEl);
}
