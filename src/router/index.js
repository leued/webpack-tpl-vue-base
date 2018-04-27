import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import ('@/components/HelloWorld');
const test = () => import ('@/pages/test/index');
const table = () => import ('@/pages/test/table');
const main = () => import ('@/components/layout/main');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children : [
        {
          path: 'test',
          name: 'test',
          component: test
        },
        {
          path: 'table',
          name: 'table',
          component: table
        }
      ]
    }
    
  ]
})
