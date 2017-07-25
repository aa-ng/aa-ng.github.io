<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
              <alex-presentation-cards :cards="cards"></alex-presentation-cards>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PresentationCards from '../cards/homeCards/Cards.vue'
  export default {
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    components: {
      'alex-presentation-cards': PresentationCards
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container { padding: 16px 10px; }
</style>
