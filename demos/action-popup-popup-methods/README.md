# Action popup popup methods

## Issues

### Chrome
Chrome throws on action.setPopup({popup: null});
See: https://issues.chromium.org/issues/466701282

### Orion
Orion incorrectly removes popup with action.setPopup({popup: null})
See: https://orionfeedback.org/d/12407-chromeactionsetpopup-popup-null-incorrectly-removes-the-popup/2

### Safari
Safari puts the popup icon in an unrecoverable state if set to an invalid popup path
See: https://bugs.webkit.org/show_bug.cgi?id=303739
