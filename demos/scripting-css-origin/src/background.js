chrome.webNavigation.onCompleted.addListener((tab) => {
  const { tabId } = tab;

  setTimeout(() => {
    chrome.scripting.insertCSS({
      target: { tabId },
      origin: 'AUTHOR',
      files: ['/insertcss-author.css'],
    }, function () {
      chrome.scripting.insertCSS({
        target: { tabId },
        origin: 'USER',
        files: ['/insertcss-user.css'],
      });
    });
  }, 500);
});
