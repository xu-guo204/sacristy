<template>
  <select @change="FnEmit($event.target.value)">
    <slot></slot>
  </select>
</template>

<script>
export default {
  methods: {
    FnEmit(val) {
      this.$emit('input', val)
    }
  }
}
</script>
