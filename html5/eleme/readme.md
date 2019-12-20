- 工作流
 使用了script教本区域 强化了我们的开发
 dev 启动了我们http服务
 styl stylus编译为css
 json-server　商家信息

 npm run dev 启动live-server

 - dom api 是过去式
 MVVM 
 {{}}代表模板需要编译的地方 等待编译的模板
 js.data: 数据放入输出
 历史 切图仔 php/java+html/css 10年前 <%=message%>前段不需要了解数据后端
 随着js 8年前 web 2.0 fetch / ajax js 主动请求数据
 前后端分庭抗礼 DOM / api

4年前 开始成熟 vue/react + node +flutter(可以做客户端ios android) + GO + docker 时代 变成 MVVM 时代 连数据也要处理

小程序和vue 都是一模一样的
mvvm的优势在于：简单
- 天生集成数据驱动 表现在专门有个页面字段data{{}} :src
- 页面数据是响应式的 只要数据变了，界面就会变

- inline-block 考点来了
inline属性：没有设置宽高的能力 兄弟间相安无事
block属性：兄弟间会换行
我们要做两列式布局 左边logo 右边商家介绍
做inline-block有一个副作用：兄弟间会产生间隙
浏览器实现inline-block的天坑 换行/n font-size来决定
父元素 font-size 0
换行元素首位相连 影响结构的可读性

- stylus 向css提供了函数功能
利用返回值的叫函数
要复用css代码 完成了css的模块化 mixin混合

- 对于图片，手机的屏幕像素不太一样
@media 媒体查询 括号里的为条件
(-webkit-)苹果和安卓核心
(-webkit-min-device-pixer-ration:3)最小设备像素为3
在手机中图片的命名：...@2x.png ...@3x.png


