# scripting-register-content-scripts-manifest-hoisted

## Issues
Chrome does not allow registerContentScripts when extension host permissions are only received from content_scripts
This is true even when the host permissions are referenced in optional_host_permissions

In addition, chrome.permissions.getAll() does list those specific host permissions as granted
