
//  Definition for singly-linked list.

// node 类
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// LinkedList类
function ListLinked(item) {
  this.head = new ListNode(item);
}
ListLinked.prototype.append = function(item){
  let newNode = new ListNode(item);
  let currentNode = this.head;
  while(currentNode && currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
}
function arrayToLink(arr) {
  let link = new ListLinked(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    link.append(arr[i])
  }
  return link
}
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  const array = [];
  while (head) {
    array.unshift(head.val);
    head = head.next;
  }
  return array;
};

console.log(reversePrint(arrayToLink([2,3,1]).head))
