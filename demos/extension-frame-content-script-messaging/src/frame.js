function logMessage (text) {
  const paragraphEl = document.createElement('p');
  paragraphEl.textContent = text;
  document.body.appendChild(paragraphEl);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  logMessage(`Receiving message: ${message}`);
  sendResponse(message);
});

setTimeout(() => {
  logMessage('Sending message: messageToContentScriptWithRuntime');
  chrome.runtime.sendMessage('messageToContentScriptWithRuntime', (response) => {
    logMessage(`Response for messageToContentScriptWithRuntime: ${response}`);
  });

  try {
    chrome.tabs.getCurrent((currentTab) => {
      logMessage('Sending message: messageToContentScriptWithTabs');
      chrome.tabs.sendMessage(currentTab.id, 'messageToContentScriptWithTabs', (response) => {
        logMessage(`Response for messageToContentScriptWithTabs: ${response}`);
      });
    });
  } catch (e) {
    logMessage(`chrome.tabs is unavailable: ${e}`);
  }
}, 500);
