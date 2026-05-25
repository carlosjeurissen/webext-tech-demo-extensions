# action-props-tab
This demo showcases tab-specific action properties like title, icon and others.

If loaded succesfully, the icon gets a green badge and the icon changes to a green outlined square and a popup is set.

## inconsistencies
Chrome, Firefox and Safari bound the tab-specific properties to the document. And clears it when the tab navigates
Orion persists the tab-specific properties even when the pages navigate

Orion bug report:
https://orionfeedback.org/d/13912-tab-specific-action-properties-not-dropped-on-navigation

Documentation:
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/action/setIcon#tabid
