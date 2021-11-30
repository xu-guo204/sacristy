function func1() {
  console.log('func1', this)
  function func2() {
    console.log('func2', this)
  }
  func2()
}

func1()

const arr1 = [1, 2, 3, 4];
const sum = arr1.reduce((acc, cur) => {
  return acc + cur
}, 0)

const arr2 = [1, 2, 3, [4, 5]];
const arr3 = arr2.reduce((acc, cur) => {
  return acc.concat(cur)
}, [])
console.log(arr3)

const arr6 = ['a', 'b', 'c', 'a']
const arr7 = arr6.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur)
  }
  return acc
}, [])
console.log(arr7)


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

console.time('one')
const arr8 = [1, 3, 6];
const sum8 = arr8.reduce((acc, cur, idx, src) => {
  console.log(acc, cur, idx, src)
  return acc + cur
})
console.timeEnd('one')


const arr9 = ['a', 'c', 'd'];
const val = arr9.find((element) => {
  return element === 'a'
})
console.log(val)
console.log(arr9.entries().next())