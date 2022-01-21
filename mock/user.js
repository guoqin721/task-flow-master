
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
    menuList: [
    {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "icon": "el-icon-s-operation",
      "menuId": 1401532054578925600,
      "menuName": "设置",
      "menuType": 0,
      "showOrder": 1,
      "updateTime": "2021-09-23 17:41:39",
      "updateUserId": 1440911410581213400
  },
  {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "formRouterName": "loadVueApp",
      "menuId": 1401532055971434700,
      "menuName": "工作流配置",
      "menuType": 1,
      "parentId": 1401532054578925600,
      "showOrder": 105,
      "updateTime": "2021-09-23 00:00:00",
      "updateUserId": 1440911410581213400
  },
  {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "formRouterName": "formFlowEntry",
      "menuId": 1433040549035643000,
      "menuName": "项目管理",
      "menuType": 1,
      "parentId": 1401532054578925600,
      "showOrder": 106,
      "updateTime": "2021-09-23 00:00:00",
      "updateUserId": 1440911410581213400
  },
  {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "formRouterName": "authorizationManagement",
      "menuId": 1401532055971434500,
      "menuName": "授权管理",
      "menuType": 1,
      "parentId": 1401532054578925600,
      "showOrder": 100,
      "updateTime": "2021-09-23 00:00:00",
      "updateUserId": 1440911410581213400
  },
  {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "formRouterName": "Menu1",
      "menuId": 1392786950682841000,
      "menuName": "kpi看板",
      "menuType": 1,
      "parentId": 1392786476428693500,
      "showOrder": 2,
      "updateTime": "2021-09-23 00:00:00",
      "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "formRouterName": "Menu1",
    "menuId": 1392786950682842100,
    "menuName": "kpi看板1",
    "menuType": 1,
    "parentId": 1392786950682841000,
    "showOrder": 2,
    "updateTime": "2021-09-23 00:00:00",
    "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "formRouterName": "Menu2",
    "menuId": 1392786950682843100,
    "menuName": "kpi看板2",
    "menuType": 1,
    "parentId": 1392786950682841000,
    "showOrder": 2,
    "updateTime": "2021-09-23 00:00:00",
    "updateUserId": 1440911410581213400
  },
  {
      "createTime": "2021-09-23 00:00:00",
      "createUserId": 1440911410581213400,
      "deletedFlag": 1,
      "icon": "el-icon-s-operation",
      "menuId": 1418057714138878000,
      "menuName": "看板",
      "formRouterName": 'Dashboard',
      "menuType": 0,
      "showOrder": 3,
      "updateTime": "2021-09-23 17:42:12",
      "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "icon": "el-icon-tickets",
    "menuId": 1418059005175009300,
    "menuName": "KPI",
    "menuType": 0,
    "showOrder": 4,
    "updateTime": "2021-09-23 17:42:32",
    "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 17:40:22",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "icon": "el-icon-menu",
    "menuId": 1440974310754750500,
    "menuName": "反馈",
    "menuType": 0,
    "showOrder": 6,
    "updateTime": "2021-09-23 17:43:00",
    "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "icon": "el-icon-c-scale-to-original",
    "menuId": 1392786476428693500,
    "menuName": "报表",
    "menuType": 0,
    "showOrder": 2,
    "updateTime": "2021-09-23 17:42:00",
    "updateUserId": 1440911410581213400
  }
]
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
