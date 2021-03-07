<template>
  <div class="my-3">
    <label>
      <input
        :value="value"
        type="number"
        step=".5"
        min="1"
        max="50"
        placeholder="Ile pali twoje auto (l/100km)?"
        class="border appearance-none border-gray-300 rounded w-full h-12 px-3 py-3"
        @input="$emit('input', $event.target.value || null)"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "Efficiency",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: Number,
  },
}
</script>

<style scoped>
input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>