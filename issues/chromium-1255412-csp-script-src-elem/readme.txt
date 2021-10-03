Chromium bugreport:
https://bugs.chromium.org/p/chromium/issues/detail?id=1255412




Steps to reproduce the problem:
1. Set the csp.extension_pages to "default-src 'none'; script-src-elem https:" in an mv3 extension.
2. Load an external script in an extension page.

What is the expected behavior?
The external script should either load or the browser should block the script with the motivation external pages are not supported.

What went wrong?
The following error will appear:

Refused to load the script 'https://apis.google.com/js/api.js' because it violates the following Content Security Policy directive: "script-src 'self'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.

Did this work before? N/A

Does this work in other browsers? N/A

Chrome version: 94.0.4606.61  Channel: n/a
OS Version: OS X 10.15

Conclusion: there are two issues here.

First of all, it wrongly considers script-src is set to 'self'. This should be 'none' as script-src is not set and falls back to default-src which is set to 'none'.

Secondly, it states 'script-src-elem' is not explicitly set. Which is simply not true. So no need to not fall back to script-src.
