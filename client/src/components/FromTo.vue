<template>
  <div>
    <places
      placeholder="Where are you heading from?"
      :disabled="loading"
      @change="place => updatePlace('from', place)"
    />
    <places
      placeholder="Where are you heading to?"
      :disabled="loading"
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
          this.error = 'There was an error while trying to fetch distance'
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>
