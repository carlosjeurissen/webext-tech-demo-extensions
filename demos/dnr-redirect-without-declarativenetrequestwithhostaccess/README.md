### Setup
dnr rule which redirects example.com to example.org
with permission declarativeNetRequest and www.example.com/*

Chrome, Firefox and Orion redirect just fine.

Safari does not redirect and needs the declarativeNetRequestWithHostAccess permission

### Links
WebKit bug report:
https://bugs.webkit.org/show_bug.cgi?id=313727

Apple Radar:
rdar://problem/175927663
