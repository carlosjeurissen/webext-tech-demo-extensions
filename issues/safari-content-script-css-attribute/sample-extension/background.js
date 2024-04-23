function openExampleWebsite () {
  browser.tabs.create({
    url: 'https://example.com/'
  });
}

browser.runtime.onInstalled.addListener(openExampleWebsite);
