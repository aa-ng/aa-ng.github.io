<template>
  <v-layout row wrap>
    <v-flex
      v-bind="{ [`sm${card.flex} xs12`]: true }"
      v-for="card in cards"
      :key="card"
    >
      <alex-presentation-card :card="card"></alex-presentation-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import PresentationCard from './PresentationCard.vue'
  export default {
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    components: {
      'alex-presentation-card': PresentationCard
    }
  }
</script>
