import Vue from 'vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App.vue'

sync(store, router)

if (window.__webpack_public_path__) {
  /* eslint-disable no-undef, camelcase */
  __webpack_public_path__ = window.__webpack_public_path__
  /* eslint-enable */
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: {App}
})
