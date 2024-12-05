// Listen for the extension being installed or updated
chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
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
        console.log("Rules added");
    });
});
