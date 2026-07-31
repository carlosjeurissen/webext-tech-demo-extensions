'use strict';

function processResults (result) {
  const resultsEl = document.getElementById('ref-result');
  resultsEl.textContent = JSON.stringify(result);
}

const potentialPromise = chrome.action.getUserSettings(processResults);

if (potentialPromise && potentialPromise.then) {
  const pEl = document.createElement('p');
  pEl.textContent = 'Your browser incorrectly returns a promise when calling with a callback';
  document.body.appendChild(pEl);

  potentialPromise.then(processResults);
}

try {
  chrome.action.onUserSettingsChanged.addListener((result) => {
    const pEl = document.createElement('p');
    pEl.textContent = 'Change: ' + JSON.stringify(result);
    document.body.appendChild(pEl);
  });
} catch (e) {
  const pEl = document.createElement('p');
  pEl.textContent = 'Your browser does not (properly) support the action.onUserSettingsChanged event: ' + e.message;
  document.body.appendChild(pEl);
}
