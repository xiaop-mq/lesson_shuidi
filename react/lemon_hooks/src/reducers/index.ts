import { combineReducers } from "redux";
// modules 模块化 ， 
import { membersReducer } from './members';
import { MemberEntity } from '../model';
// vuex  modules`
// 一个文件一个reducer 函数
// 接口 reducer 有哪些
export interface State {
  members: MemberEntity[]
}

export const state = combineReducers({
  members: membersReducer,
})