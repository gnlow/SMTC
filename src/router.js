import Vue from 'vue'
import Router from 'vue-router'
import InfoPage from './views/InfoPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: InfoPage
    },
    {
      path: '/info',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/InfoPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/RegisterPage.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('./views/WorksPage.vue')
    },
    {
      path: '/webtoon',
      name: 'webtoon',
      component: () => import('./views/WebtoonPage.vue')
    }
  ]
})
