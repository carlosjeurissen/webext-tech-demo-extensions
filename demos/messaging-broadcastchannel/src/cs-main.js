'use strict';

(function () {
  function createTextAreaEl () {
    const textareaEl = document.createElement('textarea');
    textareaEl.id = 'debug-log-area';

    textareaEl.style.width = '100%';
    textareaEl.style.fontFamily = 'monospace';
    textareaEl.style.display = 'block';
    textareaEl.style.resize = 'none';

    if (CSS.supports('field-sizing', 'content')) {
      textareaEl.style.fieldSizing = 'content';
    } else {
      textareaEl.style.overflow = 'hidden';
    }

    return textareaEl;
  }

  function logToPage (message) {
    console.log(message);

    let textareaEl = document.getElementById('debug-log-area');

    if (!textareaEl) {
      textareaEl = createTextAreaEl();
      document.body.appendChild(textareaEl);
    }

    textareaEl.value += message + '\n';

    // Manual autosize fallback logic
    if (textareaEl.style.fieldSizing !== 'content') {
      textareaEl.style.height = 'auto';
      textareaEl.style.height = textareaEl.scrollHeight + 'px';
    }
  }

  const id = 'cs-main-' + window.location.pathname;

  logToPage(`[${id}] loaded`);

  const bc = new BroadcastChannel('extension');

  bc.addEventListener('message', (event) => {
    logToPage(`[${id}] received: ${event.data.from} at ${event.data.time}`);
  });

  setTimeout(() => {
    bc.postMessage({
      from: id,
      time: Date.now(),
    });
  }, 1e3);
}());
