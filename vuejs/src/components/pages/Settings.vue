<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <alex-appearence-config
              :primaryDrawer="primaryDrawer"
              :drawers="drawers"
              :footer="footer"
              :theme="theme"
              v-if="!primaryDrawer.mini"
            ></alex-appearence-config>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AppearenceSettings from '../configuration/AppearenceSettings.vue'
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
    },
    components: {
      'alex-appearence-config': AppearenceSettings
    }
  }
</script>
