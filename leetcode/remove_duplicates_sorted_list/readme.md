`算法刷题`
 前端容易入门
 名言：我出生不好，教养也差，但一直努力尝试去做一个体面的人。

 读题
课题：
 给定 sortArr[1,1,2] 删除重复出现的元素 `就地`删除 使数组是一个唯一的长度 从小到大排序
 分析 return length 原来数组长度3 新的数组长度2（去掉重复项）
 
 - 一次遍历？
 新数组 res[] 空间复杂度O（n）
 使用for
 排好序:后面的项一定大于或等于前面的项
 等于原地删除的
 res length
 
 算法提升抽象能力，数理逻辑
 ‘letcodeAnimarion'
- 动图 
两个指针 pre cur 
cur 一直在往前跑 一次循环的灭一项·每一项便利 
pre 在后面追 
cur pre  arr 前一个，后一个
不等于的时候pre+1
相等的时候 pre不走回慢下来
如果cur和烹饪pre不一样的时候，那么per+1 等于cur
牛，从头到尾都是排好序的不重复数
每个位置放什么数？
pre 指针 没有跟上cur的速度时，显示有重复
pre cur n个空位 
pre+1删除，把cur的值 交给 pre

- 快慢指针算法
1. 一次循环 cur一直++，一直跑
2. cur跟pre arr[] 不等的话
   pre++
   相等的话 pre不动
3. cur再走的话，继续比较
   新的cur和旧的pre
   不等时，pre++ 并且把新的cur 值赋值给 新的pre
   把因为之前重复空出来的位置 给填上
4. cur>length 返回新的数组的长度

- 数据结构 链表
  [1，1，2]链表
  LinkedList next
  1 1 1 next 指向1 ，改指成2

  把数组维持位置，快慢指针






