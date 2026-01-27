function openMain () {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    chrome.tabs.create({
      url: chrome.runtime.getURL('/main.html'),
    });
  }
}

chrome.runtime.onStartup.addListener(openMain);
chrome.runtime.onInstalled.addListener(openMain);
chrome.action.onClicked.addListener(openMain);
