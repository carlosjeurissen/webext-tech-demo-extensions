const contexts = [null, 'all', 'page', 'action'];

function createMenu (props) {
  chrome.contextMenus.create(props);
  console.log('creating menu with: ');
  console.log(props);
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
