<template>
  <v-app
    id="sandbox"
    :dark="theme.dark"
    :light="!theme.dark"
    standalone
  >
    <alex-header
      :primaryDrawer="primaryDrawer"
    ></alex-header>
    <alex-drawer
      :primaryDrawer="primaryDrawer"
      :drawers="drawers"
      :footer="footer"
      :theme="theme"
    ></alex-drawer>
    <main>
      <router-view
        :cards="cards"
      ></router-view>
    </main>
    <v-footer
      :absolute="footer.fixed"
    >
      <span>Alex Ng © {{ new Date().getFullYear() }}</span>
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
        {
          title: "Welcome I'm Alex",
          src: 'https://alex-ng.herokuapp.com/images/banner.jpg',
          flex: 12,
          showDetails: false,
          summary: 'Welcome to my portfolio website!',
          chips: [
            {label: 'Web developer', icon: 'web', color: 'indigo'},
            {label: 'Software developer', icon: 'code', color: 'light-blue'},
            {label: 'Digital media enthusiast', icon: 'work', color: 'pink'}
          ]
        },
        {
          title: 'Projects',
          src: 'https://alex-ng.herokuapp.com/images/projects/ignite/preview.png',
          flex: 6,
          showDetails: false,
          summary: 'Check out some of my selected projects here on this site or on Github.',
          details: 'lorem ipsum',
          actions: [{label: 'Github', href: 'https://www.github.com/cynicalbird'}, {label: 'More', link: '/projects'}]
        },
        {
          title: 'About me',
          src: 'https://alex-ng.herokuapp.com/images/profile_pic_round.png',
          contain: true,
          flex: 6,
          showDetails: false,
          summary: 'Entering their 3rd year of Computer Science at Ryerson university Alex is strengthening their development portfolio, with new technologies and frameworks like VueJS, NodeJS and Firebase. Alex is also interested in the future of machine learning and data sciences.',
          details: {
            chips: [
              {label: 'NodeJS', icon: 'device_hub', color: 'green'},
              {label: 'VueJS', icon: 'pageview', color: 'teal'},
              {label: 'Responsive design', icon: 'dashboard', color: 'blue'},
              {label: 'AJAX', icon: 'send', color: 'purple'},
              {label: 'Git', icon: 'history', color: 'orange'},
              {label: 'Java', icon: 'computer', color: 'light-green'}
            ]
          },
          actions: [{label: 'More', link: '/about'}]
        },
        {
          title: 'Contact me',
          actions: [
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-ng-130039134/?ppe=1'},
            {label: 'Github', href: 'https://github.com/CynicalBird'},
            {label: 'Email', href: 'mailto:alex.ng.personal@gmail.com'}
          ],
          flex: 6
        }
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
    overflow: hidden;
  }
  #sandbox .container, #sandbox {
    /*min-height: 700px;*/
  }
  @import './stylus/main'
</style>
