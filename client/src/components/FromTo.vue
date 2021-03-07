<template>
  <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
    <places
      placeholder="Skąd jedziesz?"
      :disabled="loading"
      class="border appearance-none border-gray-300 rounded w-full px-3 h-12 py-3"
      @change="place => updatePlace('from', place)"
    />

    <places
      placeholder="Gdzie jedziesz?"
      :disabled="loading"
      class="border appearance-none border-gray-300 rounded w-full px-3 h-12 py-3"
      @change="place => updatePlace('to', place)"
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
          this.error = 'Wystąpił problem podczas próby sprawdzenia odległości.'
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
