'use strict';

const tests = [
  {
    title: 'Integer placeholders',
    messageId: 'integer',
    expected: '5 apples',
    placeholders: [
      5,
    ],
  },
  {
    title: 'Consequent placeholders',
    messageId: 'consequent',
    expected: 'FIRST SECONDTHIRD',
    placeholders: [
      'FIRST',
      'SECOND',
      'THIRD',
    ],
  },
  {
    title: 'Inner spaces',
    messageId: 'innerspaces',
    expected: 'placeholders',
    placeholders: ['pl', 'holders'],
  },
  {
    title: 'Whitespace collapse',
    messageId: 'whitespacecollapse',
    expected: '  one  middle  two  ',
    placeholders: [' one ', ' two '],
  },
  {
    title: 'Incomplete placeholders',
    messageId: 'incomplete',
    expected: '1: FIRST 2: SECOND 3: ',
    placeholders: [
      'FIRST',
      'SECOND',
    ],
  },
  {
    title: 'Missing message',
    messageId: 'message',
    expected: '',
  },
];

for (const {
  title, messageId, expected, placeholders,
} of tests) {
  const actual = chrome.i18n.getMessage(messageId, placeholders || null);
  const hasError = expected !== actual;
  const sectionEl = document.createElement('section');
  sectionEl.innerHTML = `
    <h3>${title || messageId}</h3>
    <p>Expected: ${expected}</p>
    <p${hasError ? ' role="alert"' : ''}>Actual: ${actual}</p>
  `;

  document.body.appendChild(sectionEl);
}
