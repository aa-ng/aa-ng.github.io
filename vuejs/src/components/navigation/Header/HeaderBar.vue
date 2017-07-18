<template>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon @click.native.stop="primaryDrawer.model = !primaryDrawer.model" v-if="primaryDrawer.type !== 'permanent'"></v-toolbar-side-icon>
    <v-toolbar-title>Alex Ng</v-toolbar-title>
  </v-toolbar>
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
      }
    }
  }
</script>
