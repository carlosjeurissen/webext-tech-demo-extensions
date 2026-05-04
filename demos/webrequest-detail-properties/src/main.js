'use strict';

const TARGET_URL = 'https://www.example.com/webrequest';

const KNOWN_PROPERTIES = `
requestId
url
method
frameId
parentFrameId
tabId
type
timeStamp
documentId
documentLifecycle
frameType
initiator
cookieStoreId
documentUrl
originUrl
incognito
thirdParty
urlClassification
statusCode
statusLine
fromCache
ip
requestHeaders
responseHeaders
requestBody
requestSize
responseSize
frameAncestors
redirectUrl
error
authCredentials
challenger
realm
scheme
isProxy
proxyInfo
securityInfo
parentDocumentId
host
port
action
`.trim().split('\n').map((propertyName) => propertyName.trim());

const EVENT_SCHEMA = {
  onBeforeRequest: ['requestBody'],
  onBeforeSendHeaders: ['requestHeaders'],
  onSendHeaders: ['requestHeaders'],
  onHeadersReceived: ['responseHeaders'],
  onResponseStarted: ['responseHeaders'],
  onCompleted: ['responseHeaders'],
  onBeforeRedirect: ['responseHeaders'],
  onAuthRequired: ['responseHeaders'],
  onErrorOccurred: [],
  onActionIgnored: [],
};

const matrixData = {};
const activeEvents = [];
const firedEvents = {};

const matrixAnchorEl = document.getElementById('ref-matrix-anchor');
const statusDisplayEl = document.getElementById('ref-status-display');

/**
 * Formats values for display.
 * Returns an object with { display, full } or null.
 */
function formatCaptureValue (propertyName, value) {
  if (value === undefined || value === null) return null;

  let resultString;

  if ((propertyName === 'requestHeaders' || propertyName === 'responseHeaders') && Array.isArray(value)) {
    resultString = value.map((header) => header.name).join(', ');
  } else if (typeof value === 'object') {
    try {
      resultString = JSON.stringify(value);
    } catch {
      resultString = Array.isArray(value) ? `Array(${value.length})` : '{...}';
    }
  } else {
    resultString = String(value);
  }

  if (resultString.length > 20) {
    return {
      display: resultString.slice(0, 17) + '…', // Using UTF-8 ellipsis
      full: resultString,
    };
  }

  return {
    display: resultString,
    full: null,
  };
}

const updateDisplayMatrix = () => {
  const tableEl = document.createElement('table');
  tableEl.className = 'x-matrix-table';

  const headerRowEl = document.createElement('tr');
  const cornerHeaderCellEl = document.createElement('th');
  cornerHeaderCellEl.className = 'x-property-column';
  cornerHeaderCellEl.textContent = 'Property';
  headerRowEl.append(cornerHeaderCellEl);

  activeEvents.forEach((eventName) => {
    const eventHeaderCellEl = document.createElement('th');
    eventHeaderCellEl.textContent = eventName;
    headerRowEl.append(eventHeaderCellEl);
  });
  tableEl.append(headerRowEl);

  const dynamicProperties = Object.keys(matrixData)
    .filter((propertyName) => !KNOWN_PROPERTIES.includes(propertyName))
    .sort();

  const allProperties = [...KNOWN_PROPERTIES, ...dynamicProperties];

  allProperties.forEach((propertyName) => {
    const rowEl = document.createElement('tr');
    if (!KNOWN_PROPERTIES.includes(propertyName)) {
      rowEl.className = 'x-row-new';
    }

    const nameCellEl = document.createElement('td');
    nameCellEl.className = 'x-property-column';
    nameCellEl.textContent = propertyName;
    rowEl.append(nameCellEl);

    activeEvents.forEach((eventName) => {
      const valueCellEl = document.createElement('td');
      const rawValue = matrixData[propertyName]?.[eventName];
      const captureResult = formatCaptureValue(propertyName, rawValue);

      if (captureResult !== null) {
        const valueSpanEl = document.createElement('span');
        valueSpanEl.className = 'x-value-text';
        valueSpanEl.textContent = captureResult.display;

        // If truncated, set the full value as the title attribute
        if (captureResult.full) {
          valueSpanEl.title = captureResult.full;
        }

        valueCellEl.append(valueSpanEl);
      } else if (firedEvents[eventName]) {
        const missingSpanEl = document.createElement('span');
        missingSpanEl.className = 'x-missing-icon';
        missingSpanEl.textContent = '❌';
        valueCellEl.append(missingSpanEl);
      } else {
        const waitingSpanEl = document.createElement('span');
        waitingSpanEl.className = 'x-waiting-icon';
        waitingSpanEl.textContent = '⌛';
        valueCellEl.append(waitingSpanEl);
      }
      rowEl.append(valueCellEl);
    });
    tableEl.append(rowEl);
  });

  matrixAnchorEl.replaceChildren(tableEl);
};

const handleTrafficCaptured = (eventName, details) => {
  firedEvents[eventName] = true;
  Object.keys(details).forEach((propertyName) => {
    if (!matrixData[propertyName]) {
      matrixData[propertyName] = {};
      activeEvents.forEach((activeEventName) => {
        matrixData[propertyName][activeEventName] = undefined;
      });
    }
    matrixData[propertyName][eventName] = details[propertyName];
  });
  updateDisplayMatrix();
};

const initializeExtension = async () => {
  Object.keys(EVENT_SCHEMA).forEach((eventName) => {
    if (!chrome.webRequest[eventName]) return;

    const infoSpecifications = [...EVENT_SCHEMA[eventName]];

    try {
      chrome.webRequest[eventName].addListener(
        (details) => handleTrafficCaptured(eventName, details),
        { urls: [TARGET_URL] },
        infoSpecifications.length > 0 ? infoSpecifications : undefined,
      );
      activeEvents.push(eventName);
      firedEvents[eventName] = false;
    } catch (error) {
      console.debug(error.message);
    }
  });

  KNOWN_PROPERTIES.forEach((propertyName) => {
    matrixData[propertyName] = {};
    activeEvents.forEach((eventName) => {
      matrixData[propertyName][eventName] = undefined;
    });
  });

  updateDisplayMatrix();

  setTimeout(() => {
    fetch(TARGET_URL).catch(() => {});
  }, 300);
};

initializeExtension();
