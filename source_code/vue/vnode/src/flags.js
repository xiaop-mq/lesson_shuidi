// 1. 位运算更快  
const VNodeFlags = {
    // html标签
    ELEMENT_HTML: 1,
    // SVG 标签
    ELEMENT_SVG: 1 << 1, // 2
    // 有状态组件
    COMPONENT_STATEFUL_NORMAL: 1 << 2, //4
    // 需要被keepAlive的有状态组件
    COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE: 1 << 3, // 8
    // 已经被keepAlive的有状态组件
    COMPONENT_STATEFUL_KEPT_ALIVE: 1 << 4,   // 16
    // 函数式组件
    COMPONENT_FUNCTIONAL: 1 << 5, // 32
    TEXT: 1 << 6, // 64
    FRAGMENT: 1 << 7,  // 128
    PORTAL: 1 << 8   // 指定挂载在哪， 离开当前的节点层次   256
  }
  // VNodeFlags.ELEMENT_HTML
  
  
  VNodeFlags.ELEMENT = VNodeFlags.ELEMENT_HTML | VNodeFlags.ELEMENT_SVG
  VNodeFlags.COMPONENT_STATEFUL = VNodeFlags.COMPONENT_STATEFUL_NORMAL | 
    VNodeFlags.COMPONENT_STATEFUL_SHOULD_KEEP_ALIVE |
    VNodeFlags.COMPONENT_STATEFUL_KEPT_ALIVE
  
  
  VNodeFlags.COMPONENT = VNodeFlags.COMPONENT_STATEFUL | 
    VNodeFlags.COMPONENT_FUNCTIONAL;
  
  
  
  // 01  10   11  1 10  &  11100   0  false
  // if (vnode.flags & VNodeFlags.COMPONENT_STATEFUL)   true
    // 01  10       vnode   html   01  10 
  //    100
  //   1000
  //  10000
  //  11100
  
  
  export { VNodeFlags }