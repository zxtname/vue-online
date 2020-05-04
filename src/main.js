import Vue from 'vue'
// import { Tabs } from 'element-ui';
import App from './App.vue'

import router from "./router/index.js";
import './plugins/element.js'
import store from "./store/index.js";

// 视频播放
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
// import './assets/css/custom-theme.css'
Vue.use(VueVideoPlayer);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
