import React from 'react';
import Context from './Context';
const { Consumer } = Context;
// <Route path="/user/:id"><Home /></Route>
// <Route path="/user/:id?from=??"><Home /></Route>
class Route extends React.Component {
  render() {
    const { path } = this.props
    // 全局地址栏
    return (
      <Consumer>
        {
          ({location, pathname}) => {
            // 地址栏
            // const { pathname } = location;
            // === 
            // path-to-regexp: path 编译成正则， 用正则匹配
            const isMatch = pathname === path
            return isMatch && this.props.children
          }
        }
      </Consumer>
    )
  }
}

export default Route