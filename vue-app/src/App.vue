<template>
  <div id="app">
    <bf-input v-model="name"></bf-input>
    {{ name }}
    <div>
      <bf-select v-model="type" @change="FnChangeType">
        <bf-option v-for="item in type_list" :key="item.value" :value="item.value" :label="item.label"></bf-option>
      </bf-select>
      {{ type }}
    </div>
  </div>
</template>

<script>
import BfInput from './components/input/inedx.vue';
import BfSelect from './components/select/index.vue';
import BfOption from './components/select/option.vue';

export default {
  name: 'App',
  components: {
    BfInput,
    BfSelect,
    BfOption
  },
  data() {
    return {
      name: 'hello world',
      type: 'test',
      type_list: [{
        label: '测试', value: 'test'
      }, {
        label: '生产', value: 'pro'
      }]
    }
  },
  methods: {
    FnChangeType(val) {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
