"use strict";

if (chrome.extension.inIncognitoContext) {
  document.body.textContent = 'According to extension.inIncognitoContext, this is a private/incognito tab';
} else {
  document.body.textContent = 'According to extension.inIncognitoContext, this is a regular tab (non private/incognito)';
}
