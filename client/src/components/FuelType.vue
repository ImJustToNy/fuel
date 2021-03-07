<template>
  <div>
    <div
      v-if="!loading && !error"
      class="grid grid-cols-2 md:grid-flow-col md:grid-cols-none gap-5"
    >
      <button
        v-for="(value, name) in prices"
        :key="name"
        class="rounded bg-green-500 text-gray-50 shadow-md p-2 hover:bg-green-600 transform hover:scale-110 transition"
        @click="updateFuelType(name)"
      >
        {{ name }} <span class="ml-2 font-light text-gray-100">{{ value }} zł/l</span>
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
          this.error = 'Wystąpił błąd podczas próby pobrania średnich cen paliw.';
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
