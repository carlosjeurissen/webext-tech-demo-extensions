Demo to test BroadcastChannel in web extensions

With iframes in extension contexts in a normal page, a sidebar and an extension popup:
In Chrome these are all isolated
In Firefox they are all shared
In Safari, normal pages receive messages from popup but not the other way around

As for content scripts, the origin for content scripts for both main and isolated worlds is the page itself

WECG issue: TBD
