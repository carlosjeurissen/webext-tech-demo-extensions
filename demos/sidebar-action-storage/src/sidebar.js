'use strict';

chrome.storage.local.get(null, (result) => {
  document.getElementById('result').textContent = 'Storage loaded: ' + JSON.stringify(result, null, 2);
});
