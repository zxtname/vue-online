import Vue from 'vue'
// import { Tabs } from 'element-ui';
import App from './App.vue'

import router from "./router/index.js";
import './plugins/element.js'
import store from "./store/index.js";

// Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
