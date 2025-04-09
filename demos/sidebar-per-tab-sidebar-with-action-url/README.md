### Demo extension

The demo extension registers a click handler on the action icon which:
1) Sets a tab specific sidebar and includes the tabinfo in the sidebar URL
2) It will open the sidebar for the specified tab id.

### Incorrect tab id issue
Microsoft edge returns incorrect tab id, see:
https://github.com/microsoft/MicrosoftEdge-Extensions/issues/278#issuecomment-2760144780

How to reproduce:
1) Load extension as unpacked extension
2) Open a new tab with https://example.com/
3) Activate the action button
4) Open a new tab with https://example.org/
5) Activate the action button
6) As you can see, the sidebar shows info for example.com instead of example.org

### Crash on reload issue
Microsoft edge crashes after reload. See:
https://github.com/microsoft/MicrosoftEdge-Extensions/issues/295

How to reproduce:
1) Load extension as unpacked extension
2) Open a new tab with https://example.com/
3) Activate the action button
4) Reload extension
5) Return to the https://example.com/ tab
6) Activate the action button
7) Microsoft Edge crashes
