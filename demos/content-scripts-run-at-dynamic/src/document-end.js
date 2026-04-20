'use strict';

(() => {
  const indicatorEl = document.createElement('div');
  indicatorEl.textContent = 'document_end';
  indicatorEl.setAttribute('style', 'all: initial !important; z-index: 9999 !important; position: fixed !important; top:26px !important; right: 0 !important; height: 24px !important; background: CanvasText !important; color: Canvas !important;');
  document.body.appendChild(indicatorEl);
})();
