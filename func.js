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