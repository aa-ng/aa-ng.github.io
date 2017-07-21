<template>
  <v-speed-dial
    v-model="fab"
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :hover="hover"
    :transition="transition"
  >
    <v-btn
      slot="activator"
      class="blue darken-2"
      dark
      fab
      hover
      v-model="fab"
    >
      <v-icon>account_circle</v-icon>
      <v-icon>close</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      class="green"
    >
      <v-icon>edit</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      class="indigo"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      class="red"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition'
    }),

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    },

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    }
  }
</script>

<style scoped>
  /* This is for documentation purposes and will not be needed in your application */
  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }
</style>
