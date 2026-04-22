'use strict';

console.log('[cs-isolated] script loaded');
const bc = new BroadcastChannel('extension');

bc.addEventListener('message', (event) => {
  console.log('[cs-isolated] received:', event.data.from, event.data.time);
});

setTimeout(() => {
  bc.postMessage({
    from: 'cs-isolated' + window.location.pathname,
    time: Date.now(),
  });
}, 1e3);
