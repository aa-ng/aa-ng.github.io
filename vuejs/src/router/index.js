import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Settings from '@/components/configuration/AppearenceSettings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ],
  mode: 'history'
})
