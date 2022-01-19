import { getObjectFromSessionStorage } from '@/utils';

function findMenuItem (menuItem, menuId, path) {
  if (Array.isArray(path)) path.push(menuItem);
  if ((menuItem.menuId + '') === (menuId + '')) return menuItem;

  let bFind = false;
  let findItem = null;
  if (Array.isArray(menuItem.children)) {
    for (let i = 0; i < menuItem.children.length; i++) {
      findItem = findMenuItem(menuItem.children[i], menuId, path);
      if (findItem != null) {
        bFind = true;
        break;
      }
    }
  }

  if (!bFind && Array.isArray(path)) path.pop();
  return bFind ? findItem : null;
}

export {
  findMenuItem
}
