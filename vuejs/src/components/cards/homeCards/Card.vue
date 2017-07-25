<template>
  <v-card class="mb-2 elevation-5">
    <!-- Card image -->
    <v-card-media
      :src="card.src"
      height="200px"
      v-if="card.src"
      class="primary"
      :contain="card.contain"
    >
      <v-layout fill-height pa-1>
        <v-container xs12 align-end flexbox>
          <v-flex>
          <span
            class="headline ml-2 white--text"
            v-text="card.title"
          ></span>
        </v-flex>
        </v-container>
      </v-layout>
    </v-card-media>
    <!-- Card body -->
    <v-card-title>
      <div class="text-xs-center text-sm-left">
        <v-container>
          <span class="grey--text">{{ card.title }}</span><br>
          <span>{{ card.summary }}</span>
          <alex-chips v-if="card.chips" :chips="card.chips"></alex-chips>

        </v-container>
      </div>
    </v-card-title>
    <!-- Card buttons/actions -->
    <v-card-actions v-if="card.details || card.actions ">
      <alex-details-button :actions="card.actions"></alex-details-button>
      <v-spacer></v-spacer>
      <!-- Dropdown details -->
      <v-btn
        icon
        @click="card.showDetails = !card.showDetails"
      >
        <v-icon v-if="card.details">{{ card.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <!-- Card details/expandable -->
    <v-divider v-if="card.details"></v-divider>
    <v-slide-y-transition>
      <v-card-text v-if="card.details" v-show="card.showDetails" class="text-xs-bottom">
        <span v-if="typeof card.details === 'string'">{{ card.details }}</span>
        <!-- Details objects -->
        <div class="text-xs-center text-md-left" v-else>
          <!-- Details title -->
          <v-container v-if="card.details.title">
            <span v-if="card.details.title" class="text-sm-center">{{ card.details.title }}</span>
          </v-container>
          <!-- Details chips -->
          <alex-chips v-if="card.details.chips" :chips="card.details.chips"></alex-chips>
          <!-- Details buttons -->
          <v-btn
            outline
            info
            dark
            v-if="card.details.buttons"
            v-for="button in card.details.buttons"
            :to="button.link"
            :href="button.href"
          >{{ button.label }}</v-btn>
        </div>
                          </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  import Chips from '../../lists/chips.vue'
  import DetailsButton from '../../input/DetailsButton.vue'

  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    components: {
      'alex-chips': Chips,
      'alex-details-button': DetailsButton
    }
  }
</script>

<style scoped>
  div.flex > div.card
  {

  }
</style>
