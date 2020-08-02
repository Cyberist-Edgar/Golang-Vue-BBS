import Vue from 'vue'
import App from './App.vue'
import Andt from 'ant-design-vue'
import router from "./router/index.js"
import axios from 'axios'
// import '../mock/'
import store from './store'
import i18n from "./i18n"
import {getToken} from "./utils/getToken"

Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;

Vue.use(Andt);

Vue.config.productionTip = false;

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前添加token
  let token = getToken();
  if (token){
    config.headers["Authorization"] = "Bearer " + token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



new Vue({
  i18n,
  store,
  router,
  render: h => h(App),

}).$mount('#app')
