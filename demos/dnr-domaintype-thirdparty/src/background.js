'use strict';

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [{
    id: 1,
    action: {
      type: 'block',
    },
    condition: {
      domainType: 'thirdParty',
      urlFilter: 'iana.org',
      resourceTypes: ['main_frame', 'sub_frame'],
    },
  }],
}).then(() => {
  console.log('Rules added');
});

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
