### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=246622

Apple Feedback Assistant report:
https://feedbackassistant.apple.com/feedback/9723963

Apple Developer Forums post:
https://developer.apple.com/forums/thread/693211

Apple radar:
rdar://84214292

### Info
Once running the extension, the background page logs the following:
{
  test_local: true
  test_sync: true
}

{
  test_local: true
  test_sync: true
}

While it should log this instead:
{
  test_local: true
}

{
  test_sync: true
}
