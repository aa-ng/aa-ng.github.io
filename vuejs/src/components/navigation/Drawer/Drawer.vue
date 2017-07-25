<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :permanent="primaryDrawer.type === 'permanent'"
    :persistent="primaryDrawer.type === 'persistent'"
    :temporary="primaryDrawer.type === 'temporary'"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    overflow
  >
    <v-list dense>
      <alex-drawer-link v-for="drawerLink in drawerLinks" :drawerLink="drawerLink"></alex-drawer-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import DrawerLink from './DrawerLink.vue'

  export default {
    data () {
      return {
        drawerLinks: [
          { icon: 'home', link: '/', label: 'Home Page' },
          { icon: 'laptop', link: '/projects', label: 'My projects' },
          { icon: 'assignment', href: 'http://resume.alex-ng.com', label: 'Resume' },
          { icon: 'face', link: '/about', label: 'About alex' },
          { icon: 'settings', link: '/settings', label: 'Settings' }
        ]
      }
    },
    props: {
      primaryDrawer: {
        type: Object,
        default: {
          model: true,
          type: 'persistent',
          clipped: false,
          floating: false,
          mini: false
        }
      }
    },
    components: {
      'alex-drawer-link': DrawerLink
    }
  }
</script>

<style scoped>

</style>
