import Vue from 'vue'
// import { Tabs } from 'element-ui';
import App from './App.vue'

import router from "./router/index.js";
import './plugins/element.js'
import store from "./store/index.js";

//import store from "./store"//vuex

// 视频播放
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
// import './assets/css/custom-theme.css'
Vue.use(VueVideoPlayer);



Vue.config.productionTip = false
//时间转化过滤器
Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // yyyy-mm-dd hh:mm:ss
  return `${y}-${m}-${d} `
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
