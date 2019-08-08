import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import "common/component/index.js"
import VueTouch from "vue-touch";

Vue.config.productionTip = false
Vue.use(VueTouch, {name: 'v-touch'})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
