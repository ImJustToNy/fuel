<template>
  <div>
    <div @click="updateFuelType('95')">
      95
    </div>

    <div @click="updateFuelType('98')">
      98
    </div>

    <div @click="updateFuelType('ON')">
      ON
    </div>

    <div @click="updateFuelType('LPG')">
      LPG
    </div>
  </div>
</template>

<script>
export default {
  name: "FuelType",
  methods: {
    updateFuelType(fuel) {
      console.log(fuel)
    }
  }
}
</script>

<style scoped>

</style>