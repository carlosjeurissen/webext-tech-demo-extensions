# Sidebar open close methods
This demo allows you to test what different sidePanel methods do.

## Issues

### Vivaldi

#### chrome.sidePanel.open
Vivaldi incorrectly toggles instead of just opening the sidePanel.

Forum post:
https://forum.vivaldi.net/topic/114344/chrome.sidepanel.open-behaves-like-a-toggle-instead-of-as-open-only

Feedback key: VB-123447

#### chrome.sidePanel.close

Vivaldi does nothing when this method is called

Forum post:
https://forum.vivaldi.net/topic/114343/calls-to-chrome.sidepanel.close-have-no-effect

Feedback key: VB-123446

#### chrome.sidePanel.getLayout

Vivaldi always returns "right" for side in the getLayout method

Forum post:
https://forum.vivaldi.net/topic/114346/sidepanel.getlayout-incorrectly-always-returns-side-right

Feedback key: VB-123454
