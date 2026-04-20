'use strict';

(() => {
  const indicatorEl = document.createElement('div');
  indicatorEl.textContent = 'document_start';
  indicatorEl.setAttribute('style', 'all: initial !important; z-index: 9999 !important; position: fixed !important; top: 0 !important; right: 0 !important; height: 24px !important; background: CanvasText !important; color: Canvas !important;');
  (document.body || document.documentElement).appendChild(indicatorEl);
})();
