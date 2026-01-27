"use strict";

const logEl = document.getElementById('ref-log');
logEl.value = '';

const createEl = document.getElementById('ref-create');

function writeToLog (parts) {
  const text = parts.join('\n') + '\n\n';
  logEl.value = logEl.value + text;
}

const events = [
  'onShown',
  'onClicked',
  'onButtonClicked',
  'onClosed',
];

events.forEach(function (eventName) {
  try {
    chrome.notifications[eventName].addListener(function (notificationId, secondary) {
      writeToLog([
        eventName,
        notificationId,
        secondary,
      ]);
    });
  } catch (e) {
    writeToLog([
      'Adding listener for ' + eventName + ' failed.',
      e.message,
    ]);
  }
});

createEl.addEventListener('click', function () {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: '/icon.png',
    title: 'Title',
    message: 'Message',
    buttons: [{
      title: 'Button1',
    }, {
      title: 'Button2',
    }],
  });
});
