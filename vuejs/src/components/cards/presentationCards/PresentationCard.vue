<template>
  <v-card class="mb-2 elevation-5">
    <v-card-media
      :src="card.src"
      height="200px"
      v-if="card.src"
      class="primary"
      :contain="card.contain"
    >
      <v-layout fill-height pa-1>
        <v-flex xs12 align-end flexbox>
          <span
            class="headline ml-2 white--text"
            v-text="card.title"
          ></span>
        </v-flex>
      </v-layout>
    </v-card-media>
    <v-card-title>
      <div class="text-xs-center text-sm-left">
        <span class="grey--text">{{ card.title }}</span><br>
        <span>{{ card.summary }}</span>
        <alex-chips v-if="card.chips" :chips="card.chips"></alex-chips>
      </div>
    </v-card-title>
    <v-card-actions v-if="card.details || card.actions ">
      <v-btn
        flat
        class="pink--text"
        v-for="action in card.actions"
        :href="action.href"
        :to="action.link"
      >{{ action.label }}</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="card.showDetails = !card.showDetails"
      >
        <v-icon v-if="card.details">{{ card.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider v-if="card.details"></v-divider>
    <v-slide-y-transition>
      <v-card-text v-if="card.details" v-show="card.showDetails" class="text-xs-bottom">
        <span v-if="typeof card.details === 'string'">{{ card.details }}</span>
        <!-- Details objects -->
        <div class="text-xs-center text-sm-left" v-else>
          <!-- Details chips -->
          <alex-chips v-if="card.details.chips" :chips="card.details.chips"></alex-chips>
        </div>
                          </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  import Chips from '../../lists/chips.vue'
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    },
    components: {
      'alex-chips': Chips
    }
  }
</script>

<style scoped>

</style>
