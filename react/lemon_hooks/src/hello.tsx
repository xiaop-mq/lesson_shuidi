import * as React from 'react';

// 给某人打招呼，  阿里浩 抖音刚 bilibili 
// js 代码不严谨的地方
export const HelloComponent = (props) => {
  return (
    <h2>Hello user: {props.userName}</h2>
  )
}