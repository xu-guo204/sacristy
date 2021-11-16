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
eg：功能型函数管道
```js

```

