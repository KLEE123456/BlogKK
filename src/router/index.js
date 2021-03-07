import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlHome from '../components/BlHome.vue'
import BlHeader from '../components/BlHeader.vue'
import BlFooter from '../components/BlFooter.vue'
import BlHomeCnt from '../components/BlHomeContent/BlHomeCnt.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BlHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
