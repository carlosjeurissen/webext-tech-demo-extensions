'use strict';

function focusTextField () {
  const textfieldEl = document.getElementById('ref-textfield');
  textfieldEl.focus();
}

document.addEventListener('click', focusTextField);
setTimeout(focusTextField, 1e3);
setTimeout(focusTextField, 200);
setTimeout(focusTextField, 0);
focusTextField();
