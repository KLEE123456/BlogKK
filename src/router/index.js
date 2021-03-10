import Vue from 'vue'
import VueRouter from 'vue-router'
import BlHome from '../components/BlHome.vue'
import BlType from '../components/BlTypes/BlType.vue'
import BlTag from '../components/BlTags/BlTag.vue'
import BlAhv from '../components/BlArchives/BlAhv.vue'
import AboutMe from '../components/AboutMe.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: BlHome
  },
  {
    path:'/blType',
    component:BlType
  },
  {
    path:'/blTag',
    component:BlTag
  },
  {
    path:'/blArc',
    component:BlAhv
  },
  {
    path:'/aboutMe',
    component:AboutMe
  }
]

const router = new VueRouter({
  routes
})

export default router
