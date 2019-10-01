// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueCarousel from 'vue-carousel'
import VueSlick from 'vue-slick'

Vue.use(VueSlick)

Vue.use(VueAnalytics, {
  id: 'UA-145069953-1',
  router
})

Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
