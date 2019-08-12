import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './views/Main';
// import OutletsMap from './views/OutletsMap.vue';
// import OutletDescription from './views/OutletDescription.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/outlets-map',
      name: 'OutletsMap',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "OutletsMap" */ './views/OutletsMap.vue')
    },
    {
      path: '/outlet-description/:id',
      name: 'outlet-description',
      component: () => import(/* webpackChunkName: "OutletDescription" */ './views/OutletDescription.vue')
    }
  ]
})
