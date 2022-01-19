# 介绍：
该项目为工作流qiankun集成主应用基座项目包含任务看板，kpi，反馈报表等，子项目工作流配置通过配置特定路由规则访问加载。
# 技术栈：
Vue & Element UI & axios & iconfont & permission control & lint 目前版本为 v4.0+ 基于 vue-cli 进行构建

# 目录结构
```
├── build                      # 构建相关
├── dist                       # 打包后文件
├── node_modules               # node_modules依赖
├── es                         # qiankun库
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法（工具）
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
│   └── setting.js             # 设置管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babel.config.js           # babel配置文件
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # npm包配置文件，依赖包信息

```

# 安装依赖
```
npm install

// 建议不要直接使用 cnpm 安装以来，会有各种诡异的bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
浏览器访问 http://localhost:9528
```

# 发布
```
// 构建测试环境
npm run build:stage

// 构建生产环境
npm run build:prod
```
# 其他
```
// 预览发布环境效果
npm run preview

// 预览发布环境效果 + 静态资源分析
npm run preview -- --report

// 代码格式检查
npm run lint

// 代码格式检查并自动修复
npm run lint -- --fix
```


# 风格指南

该基础框架配置了ESlint，请按照ESlint的风格来书写
默认情况下使用了最严格的plugin:vue/recommended来校验代码

大部分规则配置在了eslint-plugin-vue之中，ESlint具体说明参考：
https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/eslint.html

Component
所有的Component文件都是以大写开头 (PascalCase)，这也是官方所推荐的。
但除了 index.vue。

例子：
@/src/components/BackToTop/index.vue
@/src/components/Charts/Line.vue
@/src/views/example/components/Button.vue

----------------------------------------
# JS 文件
所有的.js文件都遵循横线连接 (kebab-case)。

例子：
@/src/utils/open-window.js
@/src/views/svg-icons/require-icons.js
@/src/components/MarkdownEditor/default-options.js

----------------------------------------
# Views
在views文件下，代表路由的.vue文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：
@/src/views/svg-icons/index.vue
@/src/views/svg-icons/require-icons.js

使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。

- 横线连接 (kebab-case) 也是官方推荐的命名规范之一 文档
- views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头) 
- 页面的url也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一
- 没有大小写敏感问题
