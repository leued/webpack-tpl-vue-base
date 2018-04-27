import {baseData  as  $c  } from './le/basedata.js'
import {showLoading , closeLoading } from './le/loading.js'

import $http from './le/axios.js'




const le = {};

le.install =function(Vue) {

  // Vue.prototype.$c = $c;
  Vue.$c = $c;

  Object.assign(Vue,$http)
  Vue.prototype.$showLoading = showLoading;
  Vue.prototype.$closeLoading = closeLoading;
}

export default le;

