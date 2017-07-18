<template>
  <v-app
    id="sandbox"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-header :primaryDrawer="primaryDrawer"></alex-header>
    <alex-drawer :primaryDrawer="primaryDrawer" :drawers="drawers" :footer="footer" :theme="theme"></alex-drawer>
    <main>
      <router-view :cards="cards"></router-view>
    </main>
    <v-footer :absolute="footer.fixed">
      <span>© {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Drawer from './components/navigation/Drawer/Drawer.vue'
  import HeaderBar from './components/navigation/Header/HeaderBar.vue'

  export default {
    data: () => ({
      theme: {
        dark: true
      },
      drawers: ['Permanent', 'Persistent', 'Temporary'],
      primaryDrawer: {
        model: true,
        type: 'persistent',
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        fixed: false
      },
      cards: [
        { title: "Welcome I'm Alex", src: 'https://alex-ng.herokuapp.com/images/banner.jpg', flex: 12, showDetails: false, details: 'lorem ipsum', description: 'hello world', summary: 'test' },
        { title: 'Projects', src: 'https://alex-ng.herokuapp.com/images/projects/ignite/preview.png', flex: 6, showDetails: false, details: 'lorem ipsum', description: 'hello world', summary: 'test' },
        { title: 'About me', src: 'https://alex-ng.herokuapp.com/images/projects/maze-project/mazeproject_code.png', flex: 6, showDetails: false, details: 'lorem ipsum', description: 'hello world', summary: 'test' }
      ]
    }),
    components: {
      'alex-drawer': Drawer,
      'alex-header': HeaderBar
    }
  }
</script>

<style lang="stylus">
  #sandbox {
    border: 1px solid rgba(0, 0, 0, .1);
    overflow: hidden;
  }
  #sandbox .container, #sandbox {
    min-height: 700px;
  }
  @import './stylus/main'
</style>
