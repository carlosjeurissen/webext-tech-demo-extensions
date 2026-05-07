# externally-connectable-matches
Chrome and Safari support `externally_connectable.matches` with `runtime.sendMessage()` from the MAIN world website
Firefox and Orion do not support this as of now.

Firefox is tracked at:
https://bugzilla.mozilla.org/show_bug.cgi?id=1319168

Orion is tracked at:
https://orionfeedback.org/d/13767-externally-connectablematches-with-runtimesendmessage-fails

Additional note:
Safari does not support this API on the chrome namespace in MAIN worlds.
