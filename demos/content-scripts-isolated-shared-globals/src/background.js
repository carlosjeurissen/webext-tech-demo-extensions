chrome.scripting.registerContentScripts([{
  id: '1',
  matches: ['<all_urls>'],
  runAt: 'document_start',
  persistAcrossSessions: false,
  js: [
    '/cs-register-1a.js',
    '/cs-register-1b.js',
  ],
}, {
  id: '2',
  matches: ['https://*/*'],
  persistAcrossSessions: false,
  runAt: 'document_idle',
  allFrames: true,
  matchOriginAsFallback: true,
  js: [
    '/cs-register-2a.js',
    '/cs-register-2b.js',
  ],
}]);
