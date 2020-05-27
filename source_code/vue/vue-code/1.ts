// 1. ts 如何来约束闭包函数的类型
function tsMakeMap(
    str:string,
    expectsLowerCase?: boolean
  ):(key: string) => true | void  {
    const map = Object.create(null);
    // console.log(map);
    const list = str.split(',');
    return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
  }
  
  
  // tsMakeMap('ssss')