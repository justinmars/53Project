import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Hello from './../components/Hello';

// 导入路由组件，或者全局组件
import Home from './../components/home/home.vue'
// import Text from './../components/text/text.vue'
// import TextT from './../components/text2/text2.vue'
import  tradeListBar from './../components/public/tradeListBar.vue'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: 'hello', path: '/hello', component: Hello },
		{ path: '/', redirect: '/home'},
		{ path: '/home', component: Home},
		{ name: 'tradeListBar', path: '/tradeListBar', component: tradeListBar},
  ]
})

export default router