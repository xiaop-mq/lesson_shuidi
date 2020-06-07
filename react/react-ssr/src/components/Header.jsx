import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <React.Fragment>
        {/* js 为什么要在前端运行 */}
        <button onClick={this.handleClick}> 123456 </button>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </React.Fragment>
    )
  }
}
export default Header;