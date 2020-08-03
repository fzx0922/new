import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cs1', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/cs1/index.vue')
  },
  {
    path: '/cs2', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/cs2/index.vue')
  },
  {
    path: '/cs3', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/cs3/index.vue')
  },
  {
    path: '/cs4', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/cs4/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
