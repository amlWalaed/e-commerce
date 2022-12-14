import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/global.css";
import './axios';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
