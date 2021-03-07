<template>
  <div>
    <div
      v-if="!loading && !error"
      class="grid grid-cols-2 md:grid-flow-col md:grid-cols-none gap-5"
    >
      <button
        v-for="(value, name) in prices"
        :key="name"
        class="rounded bg-green-500 text-gray-50 shadow-md p-2 hover:bg-green-600 transform hover:scale-105 transition focus:outline-none"
        :class="{ 'active': selected === name }"
        @click="updateFuelType(name)"
      >
        <span class="font-bold">{{ name }}</span> <span class="ml-2 font-light text-gray-100">{{ value }} zł/l</span>
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
      selected: null,
    };
  },
  mounted() {
    this.$http.get('prices')
        .then(r => {
          this.prices = r.data;

          if (this.$cookies.isKey('last_fuel_type')) {
            this.updateFuelType(this.$cookies.get('last_fuel_type'));
          }
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
      this.selected = fuel;
      this.$emit('price', this.prices[fuel])
      this.$cookies.set('last_fuel_type', fuel);
    }
  }
}
</script>

<style scoped>
.active {
  @apply bg-green-600 scale-110;
}
</style>
