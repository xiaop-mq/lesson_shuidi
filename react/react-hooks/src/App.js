// import React, { useState } from "react";
// const Greeting = () => {
//     const [count, setCount] = useState(0);
//     return (
//        <>
//             <h1> {count} </h1>
//             <button onClick={() => {setCount(count + 1)}}> + </button>
//        </>
//     )
// }
// export default Greeting;

// import React, { useState } from "react";
// const Greeting = () => {
//     const [count, setCount] = useState(0);      //第一次使用
//     const [istrue, setIstrue] = useState(true); //第二次使用
//     return (
//        <>
//             {istrue ? <h1> {count} </h1> : void 0}
//             <button onClick={ () => {setIstrue(!istrue)}}>change</button>
//             <button onClick={() => {setCount(count + 1)}}> + </button>
//        </>
//     )
// }
// export default Greeting;

// import React, {useState, useEffect} from "react";
// const EffectComponent = () => {
//     const [count, setCount] = useState(1);
//     useEffect(() => {
//         console.log("定义事件接口")
//         return () => {
//             console.log("注销事件接口")
//         }
//     })
//     return (
//         <>  
//             {console.log("渲染")}
//             <h1>{count}</h1>
//             <button onClick={() => {setCount(count + 1)}}> + </button>
//         </>
//     );
// }
// export default EffectComponent

import React, { useCallback } from "react";
const CallbackComponent = () => {
  let [count, setCount] = useState(1);
  let [num, setNum] = useState(1);
  
  const memoized = useCallback( () => {
      return num;
  },[count])
  console.log("记忆：",memoized());
  console.log("原始：",num);
  return (
      <>
          <button onClick={() => {setCount(count + 1)}}> count+ </button>
          <button onClick={() => {setNum(num + 1)}}> num+ </button>
      </>
  )
}



