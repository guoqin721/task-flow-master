
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
    menuList: [{
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
      "icon": "el-icon-c-scale-to-original",
      "menuId": 1392786476428693500,
      "menuName": "报表",
      "menuType": 0,
      "showOrder": 2,
      "updateTime": "2021-09-23 17:42:00",
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
  }
]
  //   menuList: [{
  //     createTime: '2021-09-23 00:00:00',
  //     createUserId: 1440911410581213400,
  //     deletedFlag: 1,
  //     formRouterName: 'loadVueApp',
  //     menuId: 1418058744037642200,
  //     menuName: '工作流配置',
  //     menuType: 1,
  //     parentId: 1418057714138878000,
  //     showOrder: 2,
  //     updateTime: '2021-09-23 00:00:00',
  //     updateUserId: 1440911410581213400
  //   },
  //   {
  //     "createTime": "2021-09-23 00:00:00",
  //     "createUserId": 1440911410581213400,
  //     "deletedFlag": 1,
  //     "formRouterName": "formFlowEntry",
  //     "menuId": 1418057835631087602,
  //     "menuName": "项目管理",
  //     "menuType": 1,
  //     "parentId": 1418057714138878000,
  //     "showOrder": 2,
  //     "updateTime": "2021-09-23 00:00:00",
  //     "updateUserId": 1440911410581213400
  //   },
  //   {
  //     "createTime": "2021-09-23 00:00:00",
  //     "createUserId": 1440911410581213400,
  //     "deletedFlag": 1,
  //     "formRouterName": "authorizationManagement",
  //     "menuId": 1418057835631088601,
  //     "menuName": "授权管理",
  //     "menuType": 1,
  //     "parentId": 1418057714138878000,
  //     "showOrder": 2,
  //     "updateTime": "2021-09-23 00:00:00",
  //     "updateUserId": 1440911410581213400
  //   },
  //   {
  //     showOrder: 2,
  //     createTime: '2021-09-23 17:41:27',
  //     createUserId: 1440911410581213400,
  //     deletedFlag: 1,
  //     menuId: 1418057714138878000,
  //     menuName: '设置',
  //     menuType: 0,
  //     onlineFlowEntryId: 1440962968085860400,
  //     onlineFormId: 1440945468593934300,
  //     updateTime: '2021-09-23 17:54:31',
  //     updateUserId: 1440911410581213400
  //     // formRouterName: '',
  //     // parentId: ''
  //   },
  //   {
  //     "createTime": "2021-09-23 00:00:00",
  //     "createUserId": 1440911410581213400,
  //     "deletedFlag": 1,
  //     "formRouterName": "Menu1",
  //     "menuId": 1392786549942259700,
  //     "menuName": "kpi看板",
  //     "menuType": 1,
  //     "parentId": 1392786476428693500,
  //     "showOrder": 2,
  //     "updateTime": "2021-09-23 00:00:00",
  //     "updateUserId": 1440911410581213400
  //   },
  //   {
  //     showOrder: 2,
  //     createTime: '2021-09-23 17:41:27',
  //     createUserId: 1440911410581213400,
  //     deletedFlag: 1,
  //     menuId: 1392786476428693500,
  //     menuName: '报表',
  //     menuType: 0,
  //     onlineFlowEntryId: 1440962968085860400,
  //     onlineFormId: 1440945468593934300,
  //     updateTime: '2021-09-23 17:54:31',
  //     updateUserId: 1440911410581213400
  //     // formRouterName: '',
  //     // parentId: ''
  //   },
  //   {
  //     "createTime": "2021-09-23 00:00:00",
  //     "createUserId": 1440911410581213400,
  //     "deletedFlag": 1,
  //     "icon": "el-icon-s-operation",
  //     "menuId": 1418057714138878000,
  //     "menuName": "流程管理",
  //     "menuType": 0,
  //     "showOrder": 3,
  //     "updateTime": "2021-09-23 17:42:12",
  //     "updateUserId": 1440911410581213400
  //   },
  // ]
    // menuList: [
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formOnlineDict",
    //       "menuId": 1392786549942259700,
    //       "menuName": "字典管理",
    //       "menuType": 1,
    //       "parentId": 1392786476428693500,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-setting",
    //       "menuId": 1401532054578925600,
    //       "menuName": "系统管理",
    //       "menuType": 0,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 17:41:39",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formFlowCategory",
    //       "menuId": 1418057835631087611,
    //       "menuName": "流程分类",
    //       "menuType": 1,
    //       "parentId": 1418057714138878000,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formMyTask",
    //       "menuId": 1418059167532322800,
    //       "menuName": "待办任务",
    //       "menuType": 1,
    //       "parentId": 1418059005175009300,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:39:22",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "menuId": 1440974056105971700,
    //       "menuName": "甲方管理",
    //       "menuType": 1,
    //       "onlineFormId": 1440959226632474600,
    //       "parentId": 1440973980537196500,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 17:39:22",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:41:27",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "menuId": 1440974580402360300,
    //       "menuName": "请假申请",
    //       "menuType": 1,
    //       "onlineFlowEntryId": 1440962968085860400,
    //       "onlineFormId": 1440945468593934300,
    //       "parentId": 1440974310754750500,
    //       "showOrder": 1,
    //       "updateTime": "2021-09-23 17:54:31",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-c-scale-to-original",
    //       "menuId": 1392786476428693500,
    //       "menuName": "在线表单",
    //       "menuType": 0,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 17:42:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formOnlinePage",
    //       "menuId": 1392786950682841000,
    //       "menuName": "表单管理",
    //       "menuType": 1,
    //       "parentId": 1392786476428693500,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formFlowEntry",
    //       "menuId": 1418058289182150700,
    //       "menuName": "流程设计",
    //       "menuType": 1,
    //       "parentId": 1418057714138878000,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formMyHistoryTask",
    //       "menuId": 1418059283920064500,
    //       "menuName": "历史任务",
    //       "menuType": 1,
    //       "parentId": 1418059005175009300,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formMyApprovedTask",
    //       "menuId": 1423161217970606000,
    //       "menuName": "已办任务",
    //       "menuType": 1,
    //       "parentId": 1418059005175009300,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:39:40",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "menuId": 1440974134195523600,
    //       "menuName": "乙方管理",
    //       "menuType": 1,
    //       "onlineFormId": 1440961456601305000,
    //       "parentId": 1440973980537196500,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 17:39:40",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:55:17",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "menuId": 1440978065088843800,
    //       "menuName": "合同工单管理",
    //       "menuType": 1,
    //       "onlineFlowEntryId": 1440968423508021200,
    //       "onlineFormId": 1440955483438452700,
    //       "parentId": 1440974310754750500,
    //       "showOrder": 2,
    //       "updateTime": "2021-09-23 17:55:17",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-s-operation",
    //       "menuId": 1418057714138878000,
    //       "menuName": "流程管理",
    //       "menuType": 0,
    //       "showOrder": 3,
    //       "updateTime": "2021-09-23 17:42:12",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formAllInstance",
    //       "menuId": 1418058744037642200,
    //       "menuName": "流程实例",
    //       "menuType": 1,
    //       "parentId": 1418057714138878000,
    //       "showOrder": 3,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:40:04",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "menuId": 1440974233613111300,
    //       "menuName": "产品管理",
    //       "menuType": 1,
    //       "onlineFormId": 1440962496864194600,
    //       "parentId": 1440973980537196500,
    //       "showOrder": 3,
    //       "updateTime": "2021-09-23 17:40:04",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-tickets",
    //       "menuId": 1418059005175009300,
    //       "menuName": "任务管理",
    //       "menuType": 0,
    //       "showOrder": 4,
    //       "updateTime": "2021-09-23 17:42:32",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:39:04",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-goods",
    //       "menuId": 1440973980537196500,
    //       "menuName": "业务管理",
    //       "menuType": 0,
    //       "showOrder": 5,
    //       "updateTime": "2021-09-23 17:42:45",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 17:40:22",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "icon": "el-icon-menu",
    //       "menuId": 1440974310754750500,
    //       "menuName": "工单管理",
    //       "menuType": 0,
    //       "showOrder": 6,
    //       "updateTime": "2021-09-23 17:43:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysUser",
    //       "menuId": 1401532055971434500,
    //       "menuName": "用户管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 100,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysDept",
    //       "menuId": 1401532055971434500,
    //       "menuName": "部门管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 105,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysPost",
    //       "menuId": 1433040549035643000,
    //       "menuName": "岗位管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 106,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysRole",
    //       "menuId": 1401532055971434500,
    //       "menuName": "角色管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 110,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysDataPerm",
    //       "menuId": 1401532055971434500,
    //       "menuName": "数据权限管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 115,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysMenu",
    //       "menuId": 1401532055971434500,
    //       "menuName": "菜单管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 120,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysPermCode",
    //       "menuId": 1401532055971434500,
    //       "menuName": "权限字管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 125,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysPerm",
    //       "menuId": 1401532055971434500,
    //       "menuName": "权限管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 130,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysDict",
    //       "menuId": 1401532055971434500,
    //       "menuName": "字典管理",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 135,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   },
    //   {
    //       "createTime": "2021-09-23 00:00:00",
    //       "createUserId": 1440911410581213400,
    //       "deletedFlag": 1,
    //       "formRouterName": "formSysLoginUser",
    //       "menuId": 1401532055971434500,
    //       "menuName": "在线用户",
    //       "menuType": 1,
    //       "parentId": 1401532054578925600,
    //       "showOrder": 145,
    //       "updateTime": "2021-09-23 00:00:00",
    //       "updateUserId": 1440911410581213400
    //   }
    // ]
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
