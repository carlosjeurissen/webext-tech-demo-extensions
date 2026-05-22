Given the following:
Extension opens extension popup
The popup has an iframe
The iframe is set to a document which declares a CSP with default-src
The extension applied a css content script to that document with a data:image based background-image

Somehow WebKit does not render this image properly. While other engines render it completely fine.

It seems somehow WebKit interprets the CSP as if it should block the css image.

WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=311728
