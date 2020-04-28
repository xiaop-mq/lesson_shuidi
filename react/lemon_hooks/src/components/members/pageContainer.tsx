import * as React from 'react';
import { connect } from 'react-redux';
import { MembersPage } from './page';
import { State } from '../../reducers';
// MembersPage  stateless component 
// container   connect   store 
// connect 对UI组件的装饰    
// connect 向 provider借状态  某些状态
const mapStateToProps = (state: State) => ({
  // ts 除了准确性外 编程的简易性  类型的 建议
  // ts 不难， 也没有浪费时间多些代码， 减少了错误， 代码写起来， 类型的补全更方便
  members: state.members,
})
const mapDispatchToProps = (dispatch) => ({
  fetchMembers: () => {
    // connect concat   太大区别的 
    // connect react-redux  
    console.log('action');
  }
});

// vuex  mapGetters  mapActions
// context
export const MembersPageContainer = connect(
  mapStateToProps,// 借状态函数
  mapDispatchToProps // 映射 action 
)(MembersPage);