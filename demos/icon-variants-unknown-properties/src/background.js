'use strict';

const EXAMPLE_URL = 'https://www.example.com';

function openDemo () {
  fetch(EXAMPLE_URL);
  chrome.tabs.create({
    url: EXAMPLE_URL,
  });
}

chrome.runtime.onInstalled.addListener(() => {});
chrome.runtime.onStartup.addListener(() => {});
chrome.action.onClicked.addListener(openDemo);

openDemo();
