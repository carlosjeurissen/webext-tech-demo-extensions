'use strict';

const resultsEl = document.getElementById('results');
resultsEl.textContent = '';

Object.keys(chrome).sort().forEach((namespace) => {
  try {
    const api = chrome[namespace];
    if (typeof api !== 'object' || api === null) return;

    const constants = Object.keys(api).filter((key) => {
      const isFunction = typeof api[key] === 'function';
      const isEvent = key.startsWith('on');
      return !isFunction && !isEvent;
    }).sort();

    if (constants.length > 0) {
      const h2El = document.createElement('h2');
      h2El.textContent = `chrome.${namespace}`;
      resultsEl.appendChild(h2El);

      constants.forEach((key) => {
        const h3El = document.createElement('h3');
        h3El.textContent = key;
        resultsEl.appendChild(h3El);

        const preEl = document.createElement('pre');
        try {
          const value = api[key];
          preEl.textContent = JSON.stringify(value, null, 2) || 'undefined';
        } catch (e) {
          preEl.textContent = `"Access Denied: ${e.message}"`;
        }
        resultsEl.appendChild(preEl);
      });
    }
  } catch (err) {
    console.warn(`Could not access chrome.${namespace}`, err);
  }
});
