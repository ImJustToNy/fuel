<template>
  <div id="app">
    <Inputs />

    <FuelType></FuelType>
  </div>
</template>

<script>
import Inputs from './components/Inputs'
import FuelType from './components/FuelType'

export default {
  name: 'App',
  components: {
    Inputs,
    FuelType
  }
}
</script>
