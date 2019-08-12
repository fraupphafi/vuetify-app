import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './storage/store.js'
import vuetify from './plugins/vuetify';
import 'ubuntu-fontface/ubuntu.css';
import 'material-icons/iconfont/material-icons.scss';
import "@mdi/font/scss/materialdesignicons.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
