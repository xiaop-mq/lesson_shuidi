import * as React from 'react';
import { Header } from './components';
// react 函数式组件
// 类型限制 函数 类  组件
// statelessComponent stateFullComponent 
// @types/react
export const App: React.StatelessComponent<{}> = () => {
  return (
    // js class 关键字， 
    <div className="container-fluid">
      <Header />
    </div>
  )
}