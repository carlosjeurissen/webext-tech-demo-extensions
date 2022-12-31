Apple Feedback assistant report:
https://feedbackassistant.apple.com/feedback/9723963

Forum post:
https://developer.apple.com/forums/thread/693211

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
