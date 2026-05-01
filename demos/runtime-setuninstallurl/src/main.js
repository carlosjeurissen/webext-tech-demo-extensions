'use strict';

const resultsBodyEl = document.getElementById('results');

const variations = [
  { label: 'https://example.com/', value: 'https://example.com/' },
  { label: 'http://example.com/', value: 'http://example.com/' },
  { label: 'Empty String', value: '' },
  { label: 'Null', value: null },
  { label: 'Undefined', value: undefined },
  { label: 'Extension Protocol', value: chrome.runtime.getURL('main.html') },
  { label: 'ws://example.com/', value: 'ws://example.com/' },
  { label: 'wss://example.com/', value: 'wss://example.com/' },
  { label: 'ftp://example.com/', value: 'ftp://example.com/' },
  { label: 'blob://example.com/', value: 'blob://example.com/' },
  { label: 'file:///tmp/test.html', value: 'file:///tmp/test.html' },
  { label: 'data:image', value: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==' },
  { label: 'javascript:alert(\'Hello!\')', value: 'javascript:alert(\'Hello!\')' },
  { label: 'chrome-extension:', value: 'chrome-extension://aowiejfoiwej/main.html' },
  { label: 'moz-extension:', value: 'moz-extension://aowiejfoiwej/main.html' },
  { label: 'safari-web-extension:', value: 'safari-web-extension://aowiejfoiwej/main.html' },
  { label: 'orion-extension:', value: 'orion-extension://aowiejfoiwej/main.html' },
  { label: 'mailto:name@example.com', value: 'mailto:name@example.com' },
  { label: 'resource://gre/', value: 'resource://gre/' },
  { label: 'about:blank', value: 'about:blank' },
  { label: 'about:config', value: 'about:config' },
  { label: 'chrome://settings', value: 'chrome://settings' },
  { label: 'tel:+15551234567', value: 'tel:+15551234567' },
  { label: 'urn:isbn:0451450523', value: 'urn:isbn:0451450523' },
  { label: 'view-source:https://example.com', value: 'view-source:https://example.com' },
];

variations.forEach((item) => {
  const rowEl = document.createElement('tr');

  const labelCellEl = document.createElement('td');
  labelCellEl.textContent = item.label;

  const valueCellEl = document.createElement('td');
  const codeEl = document.createElement('code');
  codeEl.textContent = String(item.value);
  valueCellEl.appendChild(codeEl);

  const resultCellEl = document.createElement('td');
  resultCellEl.textContent = 'Executing...';

  rowEl.appendChild(labelCellEl);
  rowEl.appendChild(valueCellEl);
  rowEl.appendChild(resultCellEl);
  resultsBodyEl.appendChild(rowEl);

  try {
    chrome.runtime.setUninstallURL(item.value, () => {
      if (chrome.runtime.lastError) {
        resultCellEl.textContent = 'Error: ' + chrome.runtime.lastError.message;
        resultCellEl.className = 'status-error';
      } else {
        resultCellEl.textContent = 'Success';
        resultCellEl.className = 'status-success';
      }
    });
  } catch (err) {
    resultCellEl.textContent = 'Exception: ' + err.message;
    resultCellEl.className = 'status-error';
  }
});
