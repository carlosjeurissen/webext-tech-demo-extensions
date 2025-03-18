const iframeUrl = 'https://error.com/';
const redirectUrl = 'https://example.com/';

chrome.webRequest.onBeforeRequest.addListener((details) => {
  // this callback doesn't fire in Vivaldi, but does in Chrome

  console.log(details);
  return {
    redirectUrl: redirectUrl,
  };
}, {
  urls: [iframeUrl],
  types: ['sub_frame'],
}, ['blocking']);
