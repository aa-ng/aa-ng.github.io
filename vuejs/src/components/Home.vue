<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex
                v-bind="{ [`sm${card.flex} xs12`]: true }"
                v-for="card in cards"
                :key="card"
              >
                <alex-presentation-card :card="card"></alex-presentation-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PresentationCard from './cards/PresentationCard.vue'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
