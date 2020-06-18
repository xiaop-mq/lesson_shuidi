class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        val: 0
      };
    }
    // 计算以下的打印结果
    componentDidMount() {
        // 第一次和第二次都是在react自身生命周期内
        // 触发时isBatching为true，所以不会直接执行更新state
        // 而是加入dirtyComponents 所以打印时两次都是更新前的状态0
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 1 次 log

    // 两次setState，获取到的this.state.val都是0，
    // 所以执行时都是将0设置为1
    // 在react内部被合并掉，只执行一次
    // 设置完成后state.val的值为1
  
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);    // 第 2 次 log
  
      setTimeout(() => {
        // 触发时isBatching为false，所以能够直接进行更新
        // 所以连着输出2，3
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 3 次 log
  
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  // 第 4 次 log
      }, 0);
    }
  
    render() {
      return null;
    }
  };
  