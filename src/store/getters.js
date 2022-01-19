import { findMenuItem } from './utils'
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  getMenuItem: (state) => {
    const menuState = state.user.menuList
    if (Array.isArray(menuState)) {
      for (let i = 0, leng = menuState.length; i < leng; i++) {
        let temp = findMenuItem(menuState[i], state.user.currentMenuId);
        if (temp != null) return temp;
      }
    }
    return null;
  },
  getCurrentMenuId: (state) => state.user.currentMenuId,
  getMenuList: state => state.user.menuList
}
export default getters
