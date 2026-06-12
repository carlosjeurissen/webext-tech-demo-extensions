'use strict';

function runDemo () {
  const refId = Math.random().toString(36).split('.')[1];
  chrome.history.addUrl({
    url: `https://www.${refId}.com`,
    title: refId,
    transition: 'link',
    visitTime: Date.now(),
  });
}

runDemo();

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(runDemo);
