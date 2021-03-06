<template>
  <div>
    <label>
      <input
        :value="value"
        type="number"
        step=".5"
        min="1"
        max="50"
        placeholder="5.67"
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
