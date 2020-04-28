import * as React from 'react';

// 给某人打招呼，  阿里浩 抖音刚 bilibili 张 
// js 代码不严禁
interface Props { //接口
  userName: string
}

export const HelloComponent = (props: Props) => {
  return (
    <h2>Hello user: {props.userName}</h2>
  )
}