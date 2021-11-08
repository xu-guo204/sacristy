<template>
  <option :value="value">{{ label }}</option>
</template>

<script>
export default {
  name: 'BfOption',
  props: {
    value: {
      type: String,
    },
    label: {
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>