import * as React from 'react'; // ts 牛逼 可以静态编译

export const HelloComponent = () => { 
    // 返回html的函数就是最简单的组件
    return ( // jsx js in xml 声明式的模板引擎语法 react vue区别 vue->template 
        <h2>
            Hello xiaop!
        </h2>
    )
}