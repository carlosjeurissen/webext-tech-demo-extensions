'use strict';

document.body.textContent = chrome.extension.inIncognitoContext
  ? 'With spanning, according to extension.inIncognitoContext, this is a private/incognito tab'
  : 'With spanning, according to extension.inIncognitoContext, this is a regular tab';
