<template>
  <div id="app">
    <bf-input v-model="name"></bf-input>
    {{ name }}
    <div>
      <bf-select v-model="type" @change="FnChangeType">
        <bf-option v-for="(item) in type_list" :key="item.id" :value="item.id" :label="item.value"></bf-option>
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
      type_list: new Array(10000)
    }
  },
  methods: {
    FnChangeType(val) {
      console.log('val', val)
    },
    uuid() {
      const temp_url = URL.createObjectURL(new Blob());
      const uuid = temp_url.toString();
      URL.revokeObjectURL(temp_url);
      return uuid.substr(uuid.lastIndexOf('/') + 1)
    } 
  },
  created() {
    console.time('one')
    for (let i = 0; i < this.type_list.length; i++) {
      this.$set(this.type_list, i, {value: 'hello' + i, id: this.uuid()})
    }
    console.timeEnd('one')
    console.log("type_list", this.type_list)
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
