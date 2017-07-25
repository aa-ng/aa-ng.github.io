<template>
  <span>
    <v-btn
      flat
      class="pink--text"
      v-for="action in actions"
      :href="action.href"
      :to="action.link"
    >{{ action.label }}</v-btn>
  </span>
</template>

<script>
  export default {
    props: {
      actions: {
        type: Array,
        required: true
      }
    }
  }
</script>
