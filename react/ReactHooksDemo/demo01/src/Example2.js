import React, { useState } from 'react';
function Example2(){
    const [ age, setage ] = useState(20)
    const [ sex, setSex ] = useState('女')
    const [ work, setWork ] = useState('前端程序员')
    return (
        <div>
            <p>xiaop今年：{age}岁</p>
            <p>xiaop性别是：{sex}</p>
            <p>xiaop的工作是：{work}</p>
        </div>
    )
}
export default Example2; 