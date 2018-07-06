import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Detail from './views/Detail'
import VueCarousel from 'vue-carousel'
import vSelect from 'vue-select'
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)
Vue.component('v-select', vSelect)
Vue.use(VueCarousel)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
