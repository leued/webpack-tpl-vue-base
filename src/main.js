

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import $le from './utils/le.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use($le);

router.beforeEach((to, from, next) => {
    // Vue.prototype.$showLoading()
    next()
})

router.afterEach((to, from) => {
   // Vue.prototype.$closeLoading()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
