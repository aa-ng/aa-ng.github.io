<template>
  <v-layout row wrap>
    <v-flex v-for="(card, i) in cards" v-if="i % 2 === 0" v-bind="{ [`sm${card.flex} xs12`]: true }">
      <v-flex
        :key="card.title"
      >
        <alex-presentation-card :card="card"></alex-presentation-card>
      </v-flex>
    </v-flex>
    <v-flex v-for="(card, i) in cards" v-if="i % 2 === 1" v-bind="{ [`sm${card.flex} xs12`]: true }">
      <v-flex
        :key="card.title"
      >
        <alex-presentation-card :card="card"></alex-presentation-card>
      </v-flex>
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
