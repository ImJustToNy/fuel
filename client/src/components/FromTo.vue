<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
    <places
      placeholder="Where are you heading from?"
      :disabled="loading"
      @change="place => updatePlace('from', place)"
      class="border appearance-none border-gray-300 rounded w-full px-3 h-12 py-3"
    />

    <places
      placeholder="Where are you heading to?"
      :disabled="loading"
      @change="place => updatePlace('to', place)"
      class="border appearance-none border-gray-300 rounded w-full px-3 h-12 py-3"
    />
  </div>
</template>

<script>
import Places from 'vue-places';

export default {
  name: "FromTo",
  components: {
    Places
  },
  data: function() {
    return {
      loading: false,
      error: '',
      from: null,
      to: null,
    };
  },
  methods: {
    updatePlace(type, place) {
      this[type] = [place.latlng.lat, place.latlng.lng]

      if (this[type] && this[type === 'from' ? 'to' : 'from']) {
        this.loading = true

        this.$http.get('distance', {
          params: {
            from_lat: this.from[0],
            from_lon: this.from[1],
            to_lat: this.to[0],
            to_lon: this.to[1],
          }
        }).then(r => {
          this.$emit('distance', r.data.distance);
        }).catch(() => {
          this.error = 'There was an error while trying to fetch distance'
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
