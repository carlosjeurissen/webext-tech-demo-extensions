'use strict';

const resultsBodyEl = document.getElementById('results');

const variations = [
  { label: 'Standard URL', value: 'https://example.com' },
  { label: 'File Protocol', value: 'file:///tmp/test.html' },
  { label: 'Extension Protocol', value: chrome.runtime.getURL('main.html') },
  { label: 'Empty String', value: '' },
  { label: 'Null', value: null },
  { label: 'Undefined', value: undefined },
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
