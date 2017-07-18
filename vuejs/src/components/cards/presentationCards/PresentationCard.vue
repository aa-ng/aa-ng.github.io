<template>
  <v-card class="mb-2">
    <v-card-media
      :src="card.src"
      height="200px"
    >
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <span class="headline ml-2 white--text" v-text="card.title"></span>
        </v-flex>
      </v-layout>
    </v-card-media>
    <v-card-title>
      <div>
        <span class="grey--text">{{ card.title }}</span><br>
        <span>{{ card.description }}</span><br>
        <span>{{ card.summary }}</span>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat class="pink--text">Github</v-btn>
      <v-btn flat class="white--text">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.native="card.showDetails = !card.showDetails">
        <v-icon>{{ card.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="card.showDetails">
        {{ card.details }}
                          </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  export default {
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
</script>
