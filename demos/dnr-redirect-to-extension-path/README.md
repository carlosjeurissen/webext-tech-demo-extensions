### Demo Setup
Sample extension registers session and dynamic dnr rules with redirects using extensionPath

The rules cover the domains example.org and example.com.

In Chrome and Firefox, the redirects work fine. However in Safari, this results in the following error:
Safari can’t open the page. The error is: “The operation couldn’t be completed. (NSURLErrorDomain error -1008.)” (NSURLErrorDomain:-1,008).

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=291263

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/16607632

Apple Developer Forums post:
https://developer.apple.com/forums/thread/775245

Apple radar:
rdar://problem/148827433
