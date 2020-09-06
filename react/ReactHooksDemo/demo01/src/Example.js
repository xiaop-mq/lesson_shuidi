import React, { useState } from 'react';
function Example(){
    const [ count, setCount ] = useState(0) // 数组解构
    return(
        <div>
            <p>You Clicked me {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>
        </div>
    )
}
export default Example;