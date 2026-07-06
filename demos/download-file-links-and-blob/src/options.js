'use strict';

const exampleJson = {
  hello: 'world',
};

function addAnchorEl (href, title, target) {
  const anchorEl = document.createElement('a');
  anchorEl.rel = 'noopener';
  anchorEl.download = title;
  anchorEl.href = href;
  anchorEl.textContent = title;
  document.body.appendChild(anchorEl);

  if (target) {
    anchorEl.target = target;
  }
}

const text = JSON.stringify(exampleJson, null, 2);
const dataUrl = 'data:application/json;charset=utf-8,' + encodeURIComponent(text);
addAnchorEl(dataUrl, 'example-data.json');
addAnchorEl(dataUrl, 'example-data-self.json', '_self');
addAnchorEl(dataUrl, 'example-data-blank.json', '_blank');

const blob = new Blob([text], {
  type: 'application/json',
});
const blobUrl = URL.createObjectURL(blob);
addAnchorEl(dataUrl, 'example-blob.json');
addAnchorEl(dataUrl, 'example-blob-self.json', '_self');
addAnchorEl(dataUrl, 'example-blob-blank.json', '_blank');
