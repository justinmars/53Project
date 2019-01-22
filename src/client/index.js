import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'

import './static/css/common.css'

Vue.use(ElementUI);

//注册全局组件开始
import headerBar from './components/public/headerBar.vue';//头部组件
Vue.component('headerBar', headerBar);
import topList from './components/public/topList.vue';//头部菜单组件
Vue.component('topList', topList);
//注册全局组件结束

Vue.config.debug = true
Vue.config.productionTip = false
/*axios.defaults.baseURL='http://localhost:4000/'*/
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'

new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App }
})
