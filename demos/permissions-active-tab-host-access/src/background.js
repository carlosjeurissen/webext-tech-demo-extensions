function openTab () {
  chrome.tabs.create({
    url: 'https://www.example.com/',
  });
}

chrome.runtime.onStartup.addListener(openTab);
chrome.runtime.onInstalled.addListener(openTab);
