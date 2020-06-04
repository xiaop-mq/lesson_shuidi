import React, { Component } from 'react';
// 服务端有 click 事件？并没有
// DOM click
// 组件
// 服务端 1：为了SEO，为了性能，renderToString
// 客户端 2：为了交互，我们还要在前端进行 事件绑定
// SPA
class Header extends Component {
  handleClick() {
    console.log('click')
  }
  render() {
    return (
      <button onClick={this.handleClick}> 123456 </button>
    )
  }
}
export default Header;