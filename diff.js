// 虚拟DOM，一个用来表示真实DOM的对象
// 虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM
// 虚拟DOM算法 = 虚拟DOM + Diff算法

// Diff算法是一种对比算法
// 对比新旧虚拟DOM，找出更改的虚拟节点，并只更新这个虚拟节点所对应的真实节点

// Diff算法比较只在同层级进行，是广度优先算法？
// 订阅者Watcher调用patch方法，给真实的DOM打补丁，patch方法就开始进入Diff算法了
// patch方法作用就是对比当前同层的虚拟节点是否为同一种类型标签，否直接替换，是调用patchVnode方法
// patchVnode: 1）找到真实DOM--el；2）判断newVnode和oldVnode是否指向同一对象，是return；3）对比文本和子节点；4）当都有子节点时，则进行updateChildren函数比较子节点
// updateChildren：首尾指针法，如果首位指针匹配不到再通过key来找出旧节点中可以复用的位置