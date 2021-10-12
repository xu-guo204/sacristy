### 组合式API


### Teleport


### 片段


### 触发组件选项


### 来自@vue/runtime-core 的 createRender API 创建自定义渲染器


### 单文件组件组合式API语法糖（```<script setup>```）


### 单文件组件状态驱动的CSS变量（```<style vars>```）


### 单文件组件（```<style scoped> ```）现在可以包含全局规则或只针对插槽内容的规则


## 从2.x开始的重大更改

### 全局 Vue API 已更改为使用应用程序实例
### createApp() 创建实例
解决了vue2没有app的概念，vue2中定义的应用只是通过```new Vue()```创建的根实例，同一个Vue构造函数创建的每个根实例共享相同的全局配置

### 全局和内部 API 已经被重构为可 tree-shakable
一些全局API现在只能作为ES模块构建的命名导出进行访问, nextTick,set
vue2:
```js 
  import Vue from 'vue'
  Vue.nextTick()
```
vue3:
```js
  import { nextTick } from 'vue'
  nextTick()
```

### v-for中的ref不再注册ref数组
vue2中v-for和ref同级使用时，ref的值将会是一个数组
vue3中，这样的用法将不再自动创建数组

### 异步组件现在需要 difineAsyncComponent 方法来创建
vue2中异步组件是通过将组件定义为返回Promise的函数来创建的，eg:

```js 
  const asyncPage = () => import('./NextPage.vue')
```

vue3中，由于函数式组件被定义为纯函数，因此异步组件的定义需要通过将其包装在新的defineAsyncComponent
方法中来显示地定义：

```js
  import { defineAsyncComponent } from 'vue' 
  const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))
```

### $attrs 现在包含 class 和 style attribute

### $children 被移除

### 自定义指令 API 已更改为与组件生命周期一致

### 自定义元素白名单现在已经在编译时执行
### is prop的使用只严格限制在被保留的```<component>```标记中
### 新增v-is

### data组件选项声明不再接受```js object```, 而是需要```function```声明
### 来自mixin的```data```选项现在为浅合并

### 组件事件现在需要在```emits```中声明
vue2:
```js
  <tempalte>
    <button v-on:click="$emit('fn-emit')"></button>
  </template>
```
vue3:
```js
  <template>
    <button v-on:click="$emit('fn-emit')"></button>
  </template>
  <script>
    export default {
      emits: ['fn-emit']
    }
  </script>
```

### $on,$off,$once实例方法已被移除，应用实例不再实现事件触发接口

### 删除过滤器，建议用方法调用或计算属性替换他们

### 新增片段，vue3 支持了多根节点的组件，也就是片段
非Prop的Attribute: 没有相应Props或emits定义的attribute, 常见的包括class、style和id
单根节点继承：非Prop的Attribute将自动添加到根节点
多根节点继承：需要显式的绑定$attrs

### 函数式组件
 
### 移除内联模板 ```inline-template``` attribute 

### v-if的key不再是必须的，Vue会自动生成唯一的key
vue2:
```js
<template v-for="item in list">
  <span key="key"></span>
</template>
```

vue3:
```js
<template v-for="item in list" key="key">
  <span></span>
</template>
```

### 移除keycode作为v-on修饰符

### 移除$listeners
vue3中事件监听器是$attrs的一部分