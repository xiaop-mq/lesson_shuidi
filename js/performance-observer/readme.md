## 性能检测
- 重定向
 meituan.com  =>  https://honghe.meituan.com/
- performance api
     paint 绘制 FP第一个像素落点
     resource 参考群里图片
- 页面很快
  页面很快：FP FCP
  性能优化:优化对比 FP FCP 现在 FCP？？
  量化 页面性能指标
  说明了优化在哪！
  FCP  first-contentful-paint
  FMP first-meaningful-paint 第一次有意义的内容 不是固定的 每个网页都有自己的侧重点
  DCL DOMContentLoader 
  打开开发者工具 可以测试速度
- navigation (url->看到页面)阶段
- onload开始执行的时候
 **loadEventStart loadEventEnd**
- domComplete：DOM 结构生成完毕
- domContentLoadedEventEnd:网页需要执行完成时间

**domContentLoadedEventStart:domContentLoaded 事件发生的时间**
- domInteractive: 网页的DOM 树创建完成(浏览器渲染 生成 DOM 树阶段)
- DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载
- The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images

- longtak:长任务(任何超过50ms任务)
- mark:标记
- measure:测量