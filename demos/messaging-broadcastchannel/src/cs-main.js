'use strict';

console.log('[cs-main] script loaded');
const bc = new BroadcastChannel('extension');

bc.addEventListener('message', (event) => {
  console.log('[cs-main] received:', event.data.from, event.data.time);
});

setTimeout(() => {
  bc.postMessage({
    from: 'cs-main-' + window.location.pathname,
    time: Date.now(),
  });
}, 1e3);
