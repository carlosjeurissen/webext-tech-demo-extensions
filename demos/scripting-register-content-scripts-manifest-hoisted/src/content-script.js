'use strict';

const correctUrl = window.location.origin === 'https://www.example.com'
  && window.location.pathname.startsWith('/webext-demos/scripting-register-content-scripts-manifest-hoisted/');

if (correctUrl) {
  const targetEl = document.body || document.documentElement;
  targetEl.textContent = 'Content Script Injected';
}
