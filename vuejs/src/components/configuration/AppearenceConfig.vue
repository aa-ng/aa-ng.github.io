<template>
  <v-card class="elevation-0">
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <span>Theme</span>
          <v-switch primary label="Dark" v-model="theme.dark" color="accent"></v-switch>
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
</template>

<script>
  export default {
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
    }
  }
</script>
