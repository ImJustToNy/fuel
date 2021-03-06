<template>
  <div>
    <div v-if="!loading && !error">
      <button
        v-for="(value, name) in prices"
        :key="name"
        @click="updateFuelType(name)"
      >
        {{ name }} ({{ value }} zł)
      </button>
    </div>

    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FuelType",
  data: function() {
    return {
      prices: {},
      loading: true,
      error: '',
    };
  },
  mounted() {
    this.$http.get('prices')
        .then(r => {
          this.prices = r.data;
        })
        .catch(() => {
          this.error = 'There was an error while trying to get average fuel prices'
        })
        .finally(() => {
          this.loading = false
        })
  },
  methods: {
    updateFuelType(fuel) {
      this.$emit('price', this.prices[fuel])
    }
  }
}
</script>
