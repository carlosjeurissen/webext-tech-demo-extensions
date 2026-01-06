'use strict';

const msg = chrome.i18n.getMessage('popup_instructions_original', [
  5,
  "<a target='_blank' title='What is a third-party tracker?' href='https://privacybadger.org/#What-is-a-third-party-tracker'>",
  '</a>',
]);
document.getElementById('placeholder-test-original').innerHTML = msg;

const msg2 = chrome.i18n.getMessage('popup_instructions_fixed', [
  '5', // must be cast as string to appear
  "<a target='_blank' title='What is a third-party tracker?' href='https://privacybadger.org/#What-is-a-third-party-tracker'>",
  '</a>',
]);
document.getElementById('placeholder-test-fixed').innerHTML = msg2;

const msg3 = chrome.i18n.getMessage('non_html_placeholder_test', ['pl', 'holders']);
document.getElementById('non-html-placeholder-test').innerHTML = msg3;

const msg4 = chrome.i18n.getMessage('non_html_placeholder_test_workaround', ['pl', 'holders']);
document.getElementById('non-html-placeholder-test-workaround').innerHTML = msg4;
