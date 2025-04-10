Some angular applications using ngx-translate can break when changing the translate attribute:
See https://github.com/ngx-translate/core/issues/1492#issuecomment-2741663060


Changing the translate attribute dynamically with a browser extension causes interference with ngx-translate.

For example, setting translate to false as such:

document.documentElement.translate = false;

Will cause ngx-translate to set the documentElement innerText to "no". See demo extension.

Example website:
https://files.dreamhost.com/
