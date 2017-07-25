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
  import PresentationCard from './Card.vue'
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

<style scoped>
  div.layout.row.wrap {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
  }
  div.flex.xs12 {
    display: inline-block;
    margin: 0 0 1em;
  }
</style>
