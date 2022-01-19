import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { getObjectFromSessionStorage, treeDataTranslate, setObjectToSessionStorage } from '@/utils'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    menuList: treeDataTranslate(getObjectFromSessionStorage('menuList1', []), 'menuId', 'parentId'),
    // 当前菜单
    currentMenuId: getObjectFromSessionStorage('currentMenuId', undefined),
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENU_LIST: (state, list) => {
    if (Array.isArray(list)) {
      if (setObjectToSessionStorage('menuList1', list)) state.menuList = treeDataTranslate(list, 'menuId', 'parentId')
      // const columnId = (state.menuList[0] || {}).menuId
      // if (setObjectToSessionStorage('currentColumnId', columnId)) state.currentColumnId = columnId
    }
  },
  setCurrentMenuId: (state, menuId) => {
    // let menuItem = null;
    if (setObjectToSessionStorage('currentMenuId', menuId)) state.currentMenuId = menuId;
    // if (Array.isArray(state.tagList) && Array.isArray(state.menuList)) {
    //   for (let i = 0; i < state.menuList.length; i++) {
    //     menuItem = findMenuItem(state.menuList[i], menuId, 'menuId');
    //     if (menuItem != null) {
    //       // 添加新的tag
    //       let tagItem = findItemFromList(state.tagList, menuId, 'menuId');
    //       if (tagItem == null) {
    //         state.tagList = [...state.tagList, menuItem];
    //         setObjectToSessionStorage('tagList', state.tagList);
    //       }
    //       // 添加新缓存
    //       if (Array.isArray(state.cachePages) && state.cachePages.indexOf(menuItem.formRouterName) === -1) {
    //         if (menuItem.onlineFormId == null || menuItem.onlineFormId === '') {
    //           state.cachePages = [...state.cachePages, menuItem.formRouterName];
    //         }
    //         setObjectToSessionStorage('cachePages', state.cachePages);
    //       }
    //       break;
    //     }
    //   }
    // }
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        const { name, avatar, menuList } = data
        commit('SET_MENU_LIST', menuList)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMenuList: (state) => {
    return state.menuList
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

