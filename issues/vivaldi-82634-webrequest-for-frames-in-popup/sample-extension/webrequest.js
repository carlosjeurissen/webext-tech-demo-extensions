var iframeUrl = 'https://error.com/'
var redirectUrl = 'https://example.com/'

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  // this callback doesn't fire in Vivaldi, but does in Chrome

  console.log(details)
  return {
    'redirectUrl': redirectUrl
  };
}, {
  urls: [ iframeUrl ],
  types: [ 'sub_frame' ]
}, [ 'blocking' ])
