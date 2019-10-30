// Import Vue and Vue Router source

import Vue from 'vue'
import router from './router'

// Import component source

import Header from './components/Header'
import App from './App'

// Register components

Vue.component('app-header', Header)
Vue.component('app', App)

// Instantiate Vue

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
