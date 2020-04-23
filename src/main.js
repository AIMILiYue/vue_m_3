import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 全局样式
import './styles/index.less'

// 导入amfe-flexible  动态设置rem基准值
import 'amfe-flexible'

Vue.config.productionTip = false

// 注册vant组件
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
