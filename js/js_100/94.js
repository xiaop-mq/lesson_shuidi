// vue 在v-for时给每项 原始绑定事件需要用事件代理吗?为什么?
// 事件代理作用:
// 1. 将事件处理程序代理到父节点,减少内存占用率
// 2. 动态生成子节点时能自动绑定事件处理程序到父节点
{/* <div  @click="handleClick">
      <span 
        v-for="(item,index) of 100000"  
        :key="index">
        {{item}}
      </span>
    </div> */}