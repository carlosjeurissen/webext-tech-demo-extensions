Chromium bugreport:
https://bugs.chromium.org/p/chromium/issues/detail?id=1246358



What steps will reproduce the problem?
(1) Load extensions with one of the following manifest keys:
"browser_specific_settings", "container" and "developer". Might be more.

What is the expected result?
No warnings.

What happens instead?
A warning is raised.


Please provide any additional information below.
"browser_specific_settings" is used in Edge, Firefox and Safari.
"container" is used for the chrome web store
"developer" is used in Opera and Firefox
