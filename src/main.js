import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

import { registerMicroApps, initGlobalState } from '../es'
/**
 * Step1 初始化应用（可选）
 */
// render({ loading: true });

// const loader = loading => render({ loading });

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'vue-children',
      entry: '//localhost:9528',
      container: '#subapp-viewport',
      // loader,
      activeRule: '/setting/loadVueApp/vue'
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
      }
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
      }
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
      }
    ]
  }
)

sessionStorage.setItem('token', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDI2MjczMTksInNlc3Npb25JZCI6ImFkbWluXzRfN2I1ZjRiM2IxNzkyNDI3NWEzMWE2ZTAzMWNiZjM1ZmEiLCJDcmVhdGVkVGltZSI6MTY0MjU1NTMxOTU1NX0.HjNqTidhgvGRfJVM5Lztyb0CeqG63XYhhqmoCI7OTt1vgErKN_ghJN63KeEEleTOQR-bx4pb2eKs9gskG839aQ')

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
  token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NDAzMzQzMjAsInNlc3Npb25JZCI6ImFkbWluXzRfNGFmMGE3MjY4MTIwNDUzOWI1OWViNDZiYTJhMDYwYjciLCJDcmVhdGVkVGltZSI6MTY0MDI2MjMyMDA2OX0.0hXtPNZIu7BgK6oGGCmXnKgpbzaKtitJC6WzIqkOBVSXCEeb-MVCpKHDximzyzEA8YRGbkUBtHu2WtPRKeZ4nw'
})

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, '***', prev))

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master'
  }
})

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
