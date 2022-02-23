// 冒泡，比较相邻两个数字的大小。将比较大的那个数交换到最后的位置。
function bubbleSort(list) {
  if (list.length <= 1) {
    return list
  }
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j < list.length - i; j++) {
      if (list[j+1] < list[j]) {
        [list[j], list[j+1]] = [list[j+1], list[j]];
      }
    }
  }
  return list
}

console.log(bubbleSort([3,1,2,7,5,4]))


// 选择排序，在数列中不断的选最小（最大）数
function selectionSort(list) {
  if (list.length <= 1) {
    return list
  }
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[i], list[j]] = [list[j], list[i]]
      }
    }
  }
  return list
}

console.log(selectionSort([3,1,2,7,5,4]))
