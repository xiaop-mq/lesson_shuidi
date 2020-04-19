import * as React from 'react';
import {Header} from './components';
//react 函数式组件
//类型限制 对函数 类 组件 
// statelessComponent stateFullComponent
export const App: React.StatelessComponent<{}> = () => {
    return (
        <div className="container-fluid">
            {/*  js 中class是关键字 */}
            {/* hello xiaop */}
            <Header/>
        </div>
    )
}