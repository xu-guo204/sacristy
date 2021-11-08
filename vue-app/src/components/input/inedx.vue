<template>
  <input :type="type" @input="FnEmit($event.target.value)">
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    FnEmit(val) {
      this.$emit('input', val)
    }
  }
}
</script>
