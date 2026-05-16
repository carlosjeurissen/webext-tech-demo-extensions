# content-script-js-injected-css-font-loading

This demo is an adaptation of the demo provided by Jeff Johnson at https://github.com/w3c/webextensions/issues/337#issuecomment-4462194115

The demo works as follows:
Sets a content script which injects a stylesheet with JS with a @font-face
Opens https://cookicons.co which has a font-src restriction

Chrome loads the font
Firefox, Safari and Orion do not load the font

See WECG: https://github.com/w3c/webextensions/issues/337#issuecomment-4462194115
