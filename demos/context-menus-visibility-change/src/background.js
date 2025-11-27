const menusApi = chrome.menus || chrome.contextMenus;

menusApi.create({
  id: 'menu',
  title: 'menu test',
  contexts: ['all', 'page', 'link', 'action'],
  visible: true,
}, () => {
  menusApi.update('menu', {
    visible: false,
  }, () => {
    menusApi.update('menu', {
      visible: true,
    });
  });
});
