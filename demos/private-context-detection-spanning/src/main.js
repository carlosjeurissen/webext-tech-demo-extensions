'use strict';

document.body.textContent = chrome.extension.inIncognitoContext
  ? 'With split, according to extension.inIncognitoContext, this is a private/incognito tab'
  : 'With split, according to extension.inIncognitoContext, this is a regular tab';
