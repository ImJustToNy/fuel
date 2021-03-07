<template>
  <div
    id="app"
    class="container mx-auto px-4"
  >
    <div class="flex items-center">
      <div class="text-4xl py-3 font-bold flex-1">
        Fuel

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-8 inline"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>

      <a
        href="https://siek.io"
        class="text-right flex-1 font-light text-gray-400 hover:text-gray-500"
      >
        Antoni Siek
      </a>
    </div>

    <FromTo @distance="distance = $event" />

    <Efficiency v-model.number="efficiency" />

    <FuelType @price="price = $event" />

    <div
      v-if="result"
      class="mt-5 w-full text-right"
    >
      <span class="text-xl text-gray-700">
        Szacowany koszt:
      </span>

      <span class="text-3xl font-extrabold">
        {{ result }} zł
      </span>
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
      efficiency: null,
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
