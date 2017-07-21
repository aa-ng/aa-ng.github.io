<template>
  <div class="text-xs-center text-md-left">
    <v-chip
      class="white--text"
      :class="chip.color"
      v-for="chip in chips"
    >
      <v-avatar
        class="darken-4"
        :class="chip.color"
      >
        <v-icon>{{chip.icon}}</v-icon>
      </v-avatar>
      {{ chip.label }}
    </v-chip>
  </div>
</template>

<script>
  export default {
    props: {
      chips: {
        type: Array,
        required: true
      }
    }
  }
</script>
