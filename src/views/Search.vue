<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="8" offset="1">
        <v-text-field v-model="olocation"></v-text-field>
      </v-col>
      <v-col cols="2" my-2>
        <v-btn @click="saveSearch">search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {locationStorage} from '@/datasources/firebase'
  export default {
    name: 'places',
    data() {
      return {
        olocation: '',
      }
    },
    firebase: {
      locationData: locationStorage
    },
    methods: {
      saveSearch() {
        locationStorage.push({
          location: this.olocation
        })
      }
    }
  }
</script>