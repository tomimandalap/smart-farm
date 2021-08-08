import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Monitoring from '../views/Monitoring.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring,
  },
  {
    path: '/timeout',
    name: 'Timeout',
    component: () => import('@/views/Timeout'),
  },
  {
    path: '*',
    component: () => import('@/views/404'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  if (to.name) {
    return next()
    // if (window.navigator.onLine) {
    //   return next('/timeout')
    //   // router.push('/timeout').catch(() => {})
    // } else {
    //   return next()
    // }
  } else {
    return next()
  }
})

const DEFAULT_TITLE = 'Smart Farm'
router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.name || DEFAULT_TITLE + ' - ' + DEFAULT_TITLE
  })
})

export default router
