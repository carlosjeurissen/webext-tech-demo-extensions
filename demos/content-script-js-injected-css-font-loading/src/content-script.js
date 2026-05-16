'use strict';

(function () {
  const userStyle = `
@font-face {
  font-family: 'Playwrite GB J Guides';
  src: url(https://fonts.gstatic.com/s/playwritegbjguides/v2/CSRh4yJOn-mMWCgLPl16K6UKAvM5yY1BdhmIKw.ttf) format('truetype');
}
* {
  font-family: 'Playwrite GB J Guides', system-ui !important;
}
  `;

  console.log('CS injected');

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(userStyle);

  if (document.adoptedStyleSheets.constructor.name === 'Array' || !document.wrappedJSObject) {
    console.log('CS loading normally');
    document.adoptedStyleSheets.push(styleSheet);
  } else {
    console.log('CS loading with wrappedJSObject');
    document.wrappedJSObject.adoptedStyleSheets.push(styleSheet);
  }
  console.log('CS done');
}());
