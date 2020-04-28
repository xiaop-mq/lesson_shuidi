// 向外提供一个reducer 函数，   reduce 操作， 返回唯一的
// 当前状态
// redux 跟vue 有区别  vuex 繁琐 四人帮
// redux   reducer  纯函数
// members [] 初始状态
// reducer  reduc 错做的 
// ts  一件事情 state 关键量
import {MemberEntity} from '../model';

export const membersReducer = (state: MemberEntity[] = []) => {
  
  return state;
}