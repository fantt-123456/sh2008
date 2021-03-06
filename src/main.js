import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false  

// //axios体验  
// import axios from 'axios'
// // 配置域名
// axios.defaults.baseURL = "https://m.maizuo.com/";

// axios.interceptors.request.use(function (config) {
//   config.headers = {
//     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022449832910059386372097","bc":"310100"}',
//     "X-Host": "mall.film-ticket.film.list",
//   };
//   //返回配置
//   return config
// }, function (err) {
//   // 对错误的处理

// })
// axios.get(
//   "gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=5102540"
// );


// 使用懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  // loading:"https://2url.cc/1OwrB",
  loading:"http://mat1.gtimg.com/yslp/qqued/liufen/20151106/09.gif"
})


//  定义事件总线
Vue.prototype.eventBus = new Vue();

//导入vuex的store对象
import store from '@/store/vuex';

//同步一下localStorage数据到vue
let _token = localStorage.getItem("_token");
if(_token){
  store.commit("updateToken",_token);
}


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
