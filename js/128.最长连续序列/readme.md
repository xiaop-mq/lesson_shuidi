## 给定一个未排序的整数数组，找出最长连续序列长度
 
实例[100, 4, 200, 1, 3, 2]
输出：4
解释：最长连续序列是[1, 2, 3, 4].它的长度为4

## 方法一：Set的查找是O(1)
- set查找元素的时间复杂度是O(1)，JS的set能给数组去掉重复元素
- 将数组元素存入set中，遍历数组nums
- 如果nums[i] - 1存在于set,说明nums[i]不是连续的起点，跳过，继续遍历。
- 当前没有左邻居，他就是连续序列的起点
- 不断在set中查看cur+1是否存在，存在，则count+1
- cur不再有右邻居了，就算出了一段连续序列的长度
