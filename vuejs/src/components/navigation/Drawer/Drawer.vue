<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :permanent="primaryDrawer.type === 'permanent'"
    :persistent="primaryDrawer.type === 'persistent'"
    :temporary="primaryDrawer.type === 'temporary'"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    absolute
    overflow
    enable-resize-watcher
  >
    <v-list dense>
      <v-list-tile class="pa-2 text-xs-center">
        <v-list-tile-action>
          <v-list-tile-avatar class="">
            <img src="https://alex-ng.herokuapp.com/images/logo.png" alt="">
          </v-list-tile-avatar>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Alex
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <alex-drawer-link v-for="drawerLink in drawerLinks" :drawerLink="drawerLink"></alex-drawer-link>
      <alex-appearence-config
        :primaryDrawer="primaryDrawer"
        :drawers="drawers"
        :footer="footer"
        :theme="theme"
        v-if="!primaryDrawer.mini"
      ></alex-appearence-config>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import AppearenceConfig from '../../configuration/AppearenceConfig.vue'
  import DrawerLink from './DrawerLink.vue'

  export default {
    data () {
      return {
        drawerLinks: [
          { icon: 'home', link: '/', label: 'Home Page' },
          { icon: 'laptop', link: '/projects', label: 'My projects' },
          { icon: 'assignment', link: '/resume', label: 'Resume' },
          { icon: 'face', link: '/about', label: 'About alex' }
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
      },
      drawers: {
        type: Array,
        default: ['Permanent', 'Persistent', 'Temporary']
      },
      footer: {
        type: Object,
        default: {
          fixed: false
        }
      },
      theme: {
        type: Object,
        default: { dark: true }
      }
    },
    components: {
      'alex-appearence-config': AppearenceConfig,
      'alex-drawer-link': DrawerLink
    }
  }
</script>

<style scoped>

</style>
