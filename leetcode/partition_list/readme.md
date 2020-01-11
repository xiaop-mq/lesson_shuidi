[分隔链表](https://leetcode-cn.com/problems/partition-list/)


LinkedList x
隔成两个区 每个节点的相对位置
1 2 2  4 3 5

1. 形成两个区？节点之间每个区域都链表
   定义两个列表 smaller bigger
2. 一次链表 
   x 值小的 smaller区
   x 值大的 bigger区
3. 将两个区连起来 smaller.next = bigger 

 通过两个列表 分隔链表的不同区域的子链表，两个子链表再结合起来。