'use strict';

chrome.runtime.getBackgroundPage((bgPage) => {
  document.getElementById('result').textContent = 'callback fired';
  bgPage.console.log('awesome');
  document.getElementById('result').textContent = 'success';
});
