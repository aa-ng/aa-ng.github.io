<template>
  <v-app
    id="sandbox"
    :dark="dark"
    :light="!dark"
    standalone
  >
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
        <v-list-tile @click.native.stop="left = !left">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Go home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <span>Theme</span>
                <v-switch primary label="Dark" v-model="dark" color="accent"></v-switch>
              </v-flex>
              <v-flex xs12 md6>
                <span>Drawer</span>
                <v-radio
                  primary
                  :label="drawer"
                  v-model="primaryDrawer.type"
                  :value="drawer.toLowerCase()"
                  v-for="drawer in drawers"
                  :key="drawer"
                  color="accent"
                ></v-radio>
                <v-switch label="Clipped" v-model="primaryDrawer.clipped" primary color="accent"></v-switch>
                <v-switch label="Floating" v-model="primaryDrawer.floating" primary color="accent"></v-switch>
                <v-switch label="Mini" v-model="primaryDrawer.mini" primary color="accent"></v-switch>
              </v-flex>
              <v-flex xs12 md6>
                <span>Footer</span>
                <v-switch label="Fixed" v-model="footer.fixed" primary></v-switch>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>Cancel</v-btn>
            <v-btn flat primary>Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.native.stop="primaryDrawer.model = !primaryDrawer.model" v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
      <v-toolbar-title>Alex Ng</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container>
        <v-layout align-center justify-center row wrap>
          <v-flex xs12 md10>
            <v-layout column>
              <v-container grid-list-md>
                <v-layout row wrap>
                  <v-flex
                    v-bind="{ [`sm${card.flex} xs12`]: true }"
                    v-for="card in cards"
                    :key="card"
                  >
                    <v-card class="mb-2">
                      <v-card-media
                        :src="card.src"
                        height="200px"
                      >
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline ml-2 white--text" v-text="card.title"></span>
                          </v-flex>
                        </v-layout>
                      </v-card-media>
                      <v-card-title>
                        <div>
                          <span class="grey--text">{{ card.title }}</span><br>
                          <span>{{ card.description }}</span><br>
                          <span>{{ card.summary }}</span>
                        </div>
                      </v-card-title>
                      <v-card-actions>
                        <v-btn flat class="pink--text">Github</v-btn>
                        <v-btn flat class="white--text">Explore</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click.native="card.showDetails = !card.showDetails">
                          <v-icon>{{ card.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                        </v-btn>
                      </v-card-actions>
                      <v-slide-y-transition>
                        <v-card-text v-show="card.showDetails">
                          {{ card.details }}
                          </v-card-text>
                      </v-slide-y-transition>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </main>
    <v-footer :absolute="footer.fixed">
      <span>© {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dark: true,
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
    })
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
