'use strict';

const URL_PREFIX = 'https://httpbin.org/anything/dnr-in-extension-page/';

const HEADER_NAME = 'user-agent';

const DNR_TYPES = ['static', 'dynamic', 'session', 'unmatched'];

const hasFieldSizing = CSS.supports('field-sizing', 'content');

function logToPage (message) {
  const textareaEl = document.getElementById('results');
  textareaEl.value += message + '\n';

  if (!hasFieldSizing) {
    textareaEl.style.height = 'auto';
    textareaEl.style.height = textareaEl.scrollHeight + 'px';
  }
}

function initRequests () {
  DNR_TYPES.forEach((type) => {
    const url = URL_PREFIX + type + '?time=' + Date.now();
    fetch(url).then((result) => {
      return result.json();
    }).then((result) => {
      const userAgent = result.headers['User-Agent'];
      const isModified = userAgent === type;
      logToPage(`${type} ${isModified ? 'is modified' : 'is NOT modified'}`);
    });
  });
}

setTimeout(initRequests, 1e3);
