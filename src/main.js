import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import VModal from 'vue-js-modal'

sync(store, router)

Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false }, scrollable: true })

export default new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
