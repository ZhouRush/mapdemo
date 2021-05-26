import Vue from 'vue'
import Router from 'vue-router'
import mapdemo from '@/views/mapdemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mapdemo',
      component: mapdemo
    }
  ]
})
