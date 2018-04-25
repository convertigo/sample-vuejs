<template>
  <div>
      <v-card  v-for="topic in data">
        <v-card-title primary-title>
          <div>{{topic.titreElement}}</div>
        </v-card-title>
        <v-card-text>
          {{topic.descElement}}
        </v-card-text>
        <v-card-actions>
          <v-btn :href="topic.lienElement" flat dark>Open article</v-btn>
        </v-card-actions>
      </v-card>
      <p>{{topic}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = store => {
  return store.dispatch(`getNews`)
}


export default {
  methods: {
    greet: () => {
      console.log(data);
    }
  },
  computed: {
    ...mapGetters({
      data: 'getNews'
    })
  },
  mounted () {
    // TODO: skip in browser on the first render if already fetched during SSR
    fetchInitialData(this.$store)
  }
}
</script>
