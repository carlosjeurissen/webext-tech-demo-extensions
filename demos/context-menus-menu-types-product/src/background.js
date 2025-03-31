const menusApi = chrome.menus || chrome.contextMenus;

const contexts = [
  null,
  'action',
  'all',
  'audio',
  'bookmark',
  'browser_action',
  'editable',
  'frame',
  'image',
  'launcher',
  'link',
  'page',
  'page_action',
  'password',
  'selection',
  'tab',
  'tools_menu',
  'video',
];

function createMenu (props) {
  try {
    menusApi.create(props);
    console.log('creating menu with: ');
    console.log(props);
  } catch (e) {
    console.log('Failed creating menu with: ');
    console.log(props, e);
  }
}

contexts.forEach((parentContext) => {
  const props = {};
  const parentId = 'parent-' + parentContext;
  props.id = parentId;
  if (parentContext) {
    props.contexts = [parentContext];
  }
  props.title = 'Parent context ' + parentContext;
  createMenu(props);

  contexts.forEach((subContext) => {
    const subProps = {
      parentId: parentId,
      id: parentId + '-sub-' + subContext,
      title: 'Child context ' + subContext,
    };
    if (subContext) {
      subProps.contexts = [subContext];
    }
    createMenu(subProps);
  });
});
