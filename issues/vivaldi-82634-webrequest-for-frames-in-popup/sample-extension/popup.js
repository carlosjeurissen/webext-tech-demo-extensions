(function () {
  'use strict';

  const iframeUrl = 'https://error.com/';

  const iframeEl = document.createElement('iframe');
  iframeEl.src = iframeUrl;
  document.body.appendChild(iframeEl);
}());
