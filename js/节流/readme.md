## JavaScript专题之跟着 underscore 学节流


节流是规定的时间内响应一次

防抖是总点击只执行最后一次


- 节流
  节流的原理很简单：
如果你持续触发事件，每隔一段时间，只执行一次事件。
根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。
关于节流的实现，有两种主流的实现方式，一种是使用`时间戳`，一种是设置`定时器`
- 时间戳
  当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
- 定时器
  当触发时间的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，知道定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。
- 所以比较两个方法：
  第一种事件会立刻执行，第二种事件会在 n 秒后第一次执行
  第一种事件停止触发后没有办法再执行事件，第二种事件停止触发后依然会再执行一次事件
- 优化
  但是我有时也希望无头有尾，或者有头无尾，这个咋办？

  那我们设置个 options 作为第三个参数，然后根据传的值判断到底哪种效果，我们约定:

  leading：false 表示禁用第一次执行
  trailing: false 表示禁用停止触发的回调