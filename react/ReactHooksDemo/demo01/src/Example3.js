import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

function Index(){
    useEffect(() => {
        console.log(`useEffect=> 老弟，你来啦~`)
    },[])
    return <h2>Hello Xiaop!</h2>
}
function List(){
    return <h2>Hello 彭彭!</h2>
}
function Example(){
    const [ count, setCount ] = useState(0) // 数组解构
    return(
        <div>
            <p>You Clicked me {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list" exact component={List}/>
            </Router>
        </div>
    )
}
export default Example;