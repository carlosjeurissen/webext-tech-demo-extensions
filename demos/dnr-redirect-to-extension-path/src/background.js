console.log('Adding dynamic rules...');

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      action: {
        type: 'redirect',
        redirect: {
          extensionPath: '/redirect.html',
        },
      },
      condition: {
        urlFilter: '||example.com^',
        resourceTypes: [
          'main_frame',
        ],
      },
    },
  ],
});

console.log('Adding session rules...');

chrome.declarativeNetRequest.updateSessionRules({
  removeRuleIds: [2],
  addRules: [
    {
      id: 2,
      priority: 1,
      action: {
        type: 'redirect',
        redirect: {
          extensionPath: '/redirect.html',
        },
      },
      condition: {
        urlFilter: '||example.org^',
        resourceTypes: [
          'main_frame',
        ],
      },
    },
  ],
});
