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

// 插入排序 打扑克取牌 --- 待优化
function insertSort(list) {
  if (list.length <= 1) {
    return list
  }
  let left_list = [];
  for (let i = 0; i < list.length; i ++) {
    if (left_list.length > 0) {
      for (let j = 0; j < left_list.length; j++) {
        if (list[i] < left_list[j]) {
          left_list.splice(j, 0, list[i])
          break;
        }
        if (j === (left_list.length - 1)) {
          left_list.push(list[i])
          break;
        }
      }
    } else {
      left_list.push(list[i])
    }
  }
  return left_list
}

console.log(insertSort([3,1,2,7,5,4]))


// 归并排序 -- 递归法排序，分成左右两部分
// 分，while循环排序，合并
function mergeSort(list) {
  if (list.length <= 1) {
    return list
  }
  let middle = Math.floor((list.length)/2)
  let left = list.slice(0, middle)
  let right = list.slice(middle)
  return mergeList(mergeSort(left), mergeSort(right))
}
function mergeList(left, right) {
  let mList = [];
  console.log('@@@@@@@@@@@@@', left ,right)
  while (left[0] && right[0]) {
    if (left[0] >= right[0]) {
      mList.push(right.splice(0, 1)[0])
    } else {
      mList.push(left.splice(0, 1)[0])
    }
  }
  while (left[0]) {
    mList.push(left.splice(0, 1)[0])
  }
  while (right[0]) {
    mList.push(right.splice(0, 1)[0])
  }
  console.log('!!!!!!!!!!!!!!!!', mList)
  return mList
}
console.log(mergeSort([3,1,2,7,5,4]))


// 快速排序

