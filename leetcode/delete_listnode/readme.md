- 在O(1)时间删除链表节点
  给定单项链表的头指针和一个节点指针，定义一个函数在O(1)时间删除该节点。
- 解题思路
1. 常规做法：从链表的头结点开始遍历，找到需要删除的节点的前驱节点，把它的next指向要删除节点的下一个节点，平均时间复杂度O(n),不满足题目要求。
2. 如果我们把下一个节点的内容复制到要删除的节点上覆盖原有的内容，再把下一个节点删除，那就相当于把当前要删除的节点删除了
3. 举个例子：我们要删除的节点 i ，先把i的下一个节点 j 的内容复制到 i ，然后把i的指针指向节点j的下一个节点。此时在删除节点j，其效果刚好是把节点i 删除了。

要注意两种情况：
1. 链表只有一个节点，即头节点等于要删除的节点，我们在删除节点之后，还要把链表的头结点设置为NULL；
2. 删除节点位于链表尾部，那么就没有下一个节点，这时我们要从头结点开始，顺序遍历得到该节点的前序节点，并完成删除操作。

```java
public static ListNode deleteNode(ListNode head, ListNode toBeDeleted){
    // 如果输入参数为空值则返回表头结点
    if(head == null || toBeDeleted == null) {
        return head;
    }
    // 如果删除的是头结点，直接返回头结点的下一个结点
    if(head == teBeDeleted){
        return head.next;
    }
    // 下面的情况是链表至少存在两个结点
    // 1. 在多个节点的情况下，要删除最后一个元素
    if(toBeDeleted.next = null){
        // 找到要删除元素的前驱
        ListNode tmp = head;
        while(tmp.next != toBeDeleted){
            tmp = tmp.next;
        }
        // 删除该节点
        tmp.next = null;
    } else {
         // 在多个结点的情况下
    toBeDeleted.value = toBeDeleted.next.value;
    // 删除节点的下一个指向原先删除引号的下下个结点，即将待删除结点的下一个结点删除
    toBeDeleted.next = toBeDeleted.next.next;
    }
    // 返回删除节点后的链表头节点
    return head;
}
```