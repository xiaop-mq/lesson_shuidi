// react 和 vue 的 diff 时间复杂度从O(n^3)优化到O(n)
// 那么O(n^3)和O(n)是如何计算出来的

// 1. 这里的n指的是页面的VDOM节点数,这个不太严谨,
// 我们可以假设变化之前的节点数为m,变化之后的节点数为n
// 2. vue和react做优化的前提是放弃了最优解,
// 本质上是一种权衡,有利有弊

// 基本概念
// 1. 典型的最小编辑距离的问题,相关算法有很多,比如git中
// 提交之前会进行一次对象的diff操作,就是用的最小距离编辑算法

// 对于树,我们也是一样的,我们定义三种操作,用来将一棵树转换成另一棵树
// 删除：删除一个结点，将它的children交给它的结点
// 插入 在children中 插入一个节点
// 修改 修改节点的值

// 算法：树是一种递归的数据结构，因此最简单的树的比较算法是递归处理
// 树的最下距离编辑算法的时间复杂度是O(n^2m(1+logmn)),
// 我们假设m与n同阶，就会变成O(n^3)