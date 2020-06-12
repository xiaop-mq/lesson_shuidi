// 底层js能力 把各种template 情况，输出为VNode
// tag 标签，各种  if else  优化的地方
// data  节点的attributes
// 是文本结点，就没有data,有的结点没有子节点
export function h(tag, data = null, children = null){
    // 结点类型提前判断
    let flags = null; // 标记，什么类型的节点
    return { // VNode
        // 代码更加精致
        _isVNode: true, // 架构vue的过程，就是实现vnode的过程
        flags, // diff算法优化 没有他也可以很好的实现，但是会多很多垃圾的，重复
        // 耗性能的结点类型判断代码 把结点类型的判断提前，读vue源码学到的
    }
}