'use strict';

function beautifyJson (json) {
  return JSON.stringify(json, null, 2);
}

const urlParams = new URLSearchParams(window.location.search);
const tabInfo = JSON.parse(urlParams.get('tab'));
document.getElementById('ref-tab-id-url').textContent = `panel tabId: ${tabInfo.id}`;
document.getElementById('ref-tab-url').textContent = `panel tabInfo: ${beautifyJson(tabInfo)}`;

chrome.tabs.query({
  active: true,
  currentWindow: true,
}, (result) => {
  const activeTabInfo = result[0];
  document.getElementById('ref-tab-id-active').textContent = `active tabId: ${activeTabInfo.id}`;
  document.getElementById('ref-tab-active').textContent = `active tabInfo: ${beautifyJson(activeTabInfo)}`;
});
