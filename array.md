## Array.prototype.reduce()
对数组中的每个元素执行一个提供的reducer函数（升序执行），将其结果汇总为单个返回；

reduce接收两个参数：
  1) callback(reducer函数)
  2) initiaValue(可选)，第一次调用callback函数时，acc的值；如果没有提供acc则取数 组第一个元素
  注：如果没有提供initiaValue，reduce会从索引1的地方开始执行callback方法，跳过第一个索引

reducer函数接收4个参数：
  1) acc(累计器)，是上一次调用回调时返回的累积值
  2) cur(当前值)
  3) idx(当前索引)
  4) src(源数组)

``` js
const arr1 = [1, 2, 3, 4];
const sum = arr1.reduce((acc, cur) => {
  return acc + cur
}, 0)
```
eg：将二维数组转为一维数组：
```js
const arr2 = [1, 2, 3, [4, 5]];
const arr3 = arr2.reduce((acc, cur) => {
  return acc.concat(cur)
}, [])
```
eg: 计算数组种每个元素出现的次数
```js
const arr4 = ['a', 'b', 'c', 'a']
const arr5 = arr4.reduce((acc, cur) => {
  if (cur in acc) {
    acc[cur]++;
  } else {
    acc[cur] = 0;
  }
  return acc
}, {})
```
eg：数组去重
```js
const arr6 = ['a', 'b', 'c', 'a']
const arr7 = arr6.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur)
  }
  return acc
}, [])
```

eg：按顺序执行Promise
```js

```
<font color="red">Promise</font>

eg：功能型函数管道
```js

```
polyfill：
```js
Array.prototype.reduce = function(callback, initiaValue) {
  let i = 0;
  if (!initiaValue) {
    initiaValue = this[0];
    i++;
  }
  while(i < this.length) {
    initiaValue = callback(initiaValue, this[i], i, this)
    i++;
  }
}
```
<font color=red>注意：考虑原型链的可枚举问题</font>

## Array.prototype.find()
返回数组中第一个满足提供的测试函数的元素，否则返回undefined。

find接收两个参数：
  1) callback(回调函数)
  2) thisArg(可选)，执行回调时用作this的对象。

callback接收3个参数：
  1) element(当前元素)
  2) index(可选，当前索引)
  3) array(可选，数组本身)

注意：callback函数会为数组中的每个索引调用，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

```js
const arr9 = ['a', 'c', 'd'];
const val = arr9.find((element) => {
  return element === 'a'
})
```

## Array.prototype.entries()
返回一个新的Array Iterator(迭代器)对象，该对象包含数组中每个索引的键值对

## Array.prototype.fill()
用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

fill()接收三个参数：
  1) value(用来填充数组元素的值)。
  2) start(可选，起始索引)。
  3) end(可选，终止索引，默认值为this.length)

## Array.prototype.flat()
会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回

## forEach和for of区别
forEach遍历数组会自动跳过空元素
for of循环不能去除数组空位
