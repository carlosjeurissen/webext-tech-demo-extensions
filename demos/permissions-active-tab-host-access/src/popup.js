const activeTabQuery = await chrome.tabs.query({
  active: true,
  currentWindow: true,
});

const activeTab = activeTabQuery[0];

chrome.scripting.executeScript({
  files: ['/content-script.js'],
  target: {
    tabId: activeTab.id,
  },
});

function logToBody (message) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = message;
  document.body.appendChild(paragraphEl);
}

const tabUrl = activeTab.pendingUrl || activeTab.url;
fetch(tabUrl).then((result) => {
  logToBody('fetch:' + result.status);
}, (e) => {
  logToBody('fetch:' + e);
});

const tabMatchPattern = new URL(tabUrl).origin + '/*';
chrome.permissions.contains({
  origins: [tabMatchPattern],
}).then((granted) => {
  logToBody('permissions:' + granted);
});
