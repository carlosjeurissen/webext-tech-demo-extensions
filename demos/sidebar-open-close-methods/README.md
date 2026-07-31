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

Microsoft Edge on Android crashes when calling this method:
https://github.com/microsoft/MicrosoftEdge-Extensions/issues/661

### Orion
https://orionfeedback.org/d/14326-calling-sidepanelgetoptions-from-a-sidebar-gives-unable-to-find-toolbar-item
https://orionfeedback.org/d/14325-calling-sidepanelclose-in-one-window-collapses-the-toolbar-in-another-window
https://orionfeedback.org/d/14307-opening-sidebar-in-one-window-destroys-it-in-the-other
https://orionfeedback.org/d/14299-calling-sidebaractionopen-or-sidepanelopen-while-sidebar-is-already-open-should-not-re-opens-the-sidebar
https://orionfeedback.org/d/14298-calling-sidebaractionclose-from-a-sidebar-gives-unable-to-find-toolbar-item-error
https://orionfeedback.org/d/14297-sidepanelclose-is-not-implemented
