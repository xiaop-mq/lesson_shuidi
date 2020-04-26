var mergeKLists = function (lists) {
    // 判断数组为空的情况
    if (!lists || lists.length == 0) return null;
    // 定义一个空数组
    let arr = [];
    // 定义一个变量让其等于我们的节点函数
    let res = new ListNode(0);
    // 遍历循环链表元素
    lists.forEach(lists => {
        // 定义cur变量
        let cur = lists;
        // 定义cur方法
        while (cur) {
            // 当cur存在 就将数值放进数组
            arr.push(cur.val)
            // 向后面的数循环
            cur = cur.next;
        }
    });
    // 按优先级排序链表
    let cur = res;
    arr.sort((a, b) => a - b).forEach(val => {
        let node = new ListNode(val);
        cur.next = node;
        cur = cur.next;
    })
    return res.next;
}
