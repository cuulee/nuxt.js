// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
<% if (store && storePath) { %>import store from '<%= storePath %>'<% } %>

// import VueProgressBar from './plugins/vue-progressbar'
// Vue.use(VueProgressBar, {
//   color: '#efc14e',
//   failedColor: 'red',
//   height: '2px'
// })

import App from './App.vue'
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = {
  router,
  <%= (store ? 'store,' : '') %>
  ...App
}

export { app, router<%= (store ? ', store' : '') %> }
