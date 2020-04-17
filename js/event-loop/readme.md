事件: mousemove mousedown
独立线程 web-worker: worker event loop
为了协调event、用户交互、脚本、render、网络等等
## event-loop分类
1. window.event.loop
2. window.event.loop
3. worklet.event.loop 

- 事件循环有一个或多个task queue
task的产生来源于下面：
- event
- parseing
- 每个事件循环都有一个正在运行的 task
每个事件循环都有一个 micortask queue
每个事件循环都有一个 micortask checkput 布尔值(最初为false)

文字版的伪代码
## prcess
事件循环只要存在，就不断执行以下的步骤
从taskqueue 取出第一个可执行任务



