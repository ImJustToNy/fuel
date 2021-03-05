<template>
  <div>
    <places
      placeholder="Where are you heading from?"
      @change="place => updatePlace(1, place)"
    />
    <places
      placeholder="Where are you heading to?"
      @change="place => updatePlace(2, place)"
    />
  </div>
</template>

<script>
import Places from 'vue-places';

export default {
  name: "Map",
  components: {
    Places
  },
  methods: {
    updatePlace(type, place) {
      console.log(type, place)
    }
  }
}
</script>

<style scoped>

</style>