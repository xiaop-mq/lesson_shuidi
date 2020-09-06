import React, { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const CountContext = createContext();
function Counter(){
    let count = useContext(CountContext)
return (<h2>{count}</h2>)
}

function Example(){
    const [ count, setCount ] = useState(0) // 数组解构
    return(
        <div>
            <p>You Clicked me {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
export default Example;