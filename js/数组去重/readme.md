## JavaScript专题之数组去重
1. 使用 indexOf 兼容性好！
特殊类型比较

2. 去重的方法就到此结束了，然而要去重的元素类型可能是多种多样，除了例子中简单的 1 和 '1' 之外，其实还有 null、undefined、NaN、对象等，那么对于这些元素，之前的这些方法的去重结果又是怎样呢？

https://juejin.im/post/5949d85f61ff4b006c0de98b

双重循环 + 新数组 
indexOf + 新数组
filter()方法
includes()方法
排序后去重
使用reduce方法
键值对方式实现
利用map实现
双指针实现
使用链表实现
Set数据结构实现