import Vue from 'vue';
import VueRouter from "vue-router";
import store from './store'
import axios from 'axios'
import './config/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import Mui from 'vue-awesome-mui';
import * as echarts from 'echarts';
// import LyTab from '../packages/tab'
// axios请求
Vue.prototype.$ajax = axios
//封装后的请求
Vue.use(VueRouter)
Vue.use(ElementUI)
//手机点击返回键，返回上一个目录
Vue.use(Mui);
// 引入echarts
Vue.prototype.$echarts = echarts;
//引入根模板
import home from './components/home'

// Vue.use(LyTab)



//引入路由配置信息
import routes from './router'

//定义一个VUE内全局用到的名称（标题）
Vue.prototype.appName = 'AMD营养';

//定义路由配置
const router = new VueRouter({
	hashbang: false,
	history: true,
	routes: routes,
	scrollBehavior: function(to, from, savedPosition) {
		return {
			"x": 0,
			"y": 0
		}
	}
});
//添加路由钩子修改每个页面标题
router.beforeEach((to, form, next) => {
  //如果自定义了标题就取标题，否则拿全局标题
  window.document.title = to.meta.title !== undefined ? (to.meta.title + '-' + Vue.prototype.appName) : Vue.prototype.appName;
  next()
});

//通过components下的index.js文件导入组件
import components from './components/index'
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
	Vue.component(key, components[key])
});

//通过filters.js导入自定义用于过滤的函数
import filters from './config/filters'
//对导入的函数进行全局过滤器注册
Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
});

//methods.js导入自定义方法(/变量)用于全局方法
import methods from './config/methods'
//方法挂靠全局
Object.keys(methods).forEach((key) => {
	Vue.prototype[key] = methods[key];
});

//验证页面是否有token
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/reg') {
    next();
  } else {
    /***请求的时候回把这段放开 */
    // let token = localStorage.getItem('token');
    // let phone = localStorage.getItem('phone');
    // console.log('token='+token +  ' _phone=' + phone)
    // if (token === null || token === '' || phone=== null || phone ==='' ) {
    //   next('/login');
    // } else {
    //   next();
    // }
    /***请求的时候回把这段放开 */
    //这个next()需要删掉
    next();
  }
});

const app = new Vue({
	router,
	store,
	render: h => h(home)
}).$mount('#app');



