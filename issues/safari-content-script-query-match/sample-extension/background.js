function openExampleWebsites () {
  browser.tabs.create({
    url: 'https://example.com/?query=1',
  });

  browser.tabs.create({
    url: 'https://example.com/query/',
  });
}

browser.runtime.onInstalled.addListener(openExampleWebsites);
