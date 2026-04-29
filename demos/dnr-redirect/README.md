### Setup
extension has a dnr which redirects www.example.com to www.example.org. It also fetches host permissions for www.example.com.

when loading the extension, it automatically loads www.example.com which redirects to www.example.org.

### Issues
Safari has the following issue:
When clicking the address-bar and enter https://www.example.com and hit enter, it says:
This webpage was reloaded because a problem occured.
(however it still redirects to https://www.example.org)

When repeating this, it clears the page and gives:
A problem repeatedly occurred with:
"https://www.example.org"

Bugreport: TBD
