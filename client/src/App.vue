<template>
  <div id="app" class="container">
    <h1>Fuel calculator</h1>

    <FromTo @distance="distance = $event" />

    <Efficiency v-model.number="efficiency" />

    <FuelType @price="price = $event" />

    <div v-if="result">
      Result: {{ result }}
    </div>
  </div>
</template>

<script>
import FromTo from './components/FromTo';
import FuelType from './components/FuelType';
import Efficiency from './components/Efficiency';

export default {
  name: 'App',
  components: {
    FromTo,
    FuelType,
    Efficiency,
  },
  data: function () {
    return {
      distance: null,
      price: null,
      efficiency: 5.5,
    };
  },
  computed: {
    result: function () {
      if (!this.distance || !this.price || !this.efficiency) {
        return
      }

      return Math.round((this.distance / 1000) * this.price * (this.efficiency / 100) * 100) / 100;
    }
  }
}
</script>

<style scoped>
.container {

}
</style>