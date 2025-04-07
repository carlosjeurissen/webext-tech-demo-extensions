console.log('Adding session rules...');

chrome.declarativeNetRequest.updateSessionRules({
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
        urlFilter: '||example.org^',
        resourceTypes: [
          'main_frame',
        ],
      },
    },
  ],
});

console.log('Removing dynamic rules from previous installation...');

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [2],
}, () => {
  console.log('Adding dynamic rules...');

  chrome.declarativeNetRequest.updateDynamicRules({
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
          urlFilter: '||example.com^',
          resourceTypes: [
            'main_frame',
          ],
        },
      },
    ],
  });
});
