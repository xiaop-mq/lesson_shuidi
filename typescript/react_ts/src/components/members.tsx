import * as React from 'react';
import MemberHeader from './memberHeader';
import { memberAPI } from '../api/member';
import { MemberEntity } from '../model';
interface Props {
  
 }
// state vue data, 组件最重要
interface State {
  members: MemberEntity[]
}
// 内部有 vue data   react state
export class MembersPage extends React.Component<Props, State> {
  constructor(props) {
    super(props); // 父类的构造函数执行一下
    this.state = { // 组件的状态
       // vue data   react 分格， 没有api的  vue api 是美好的， 初恋的浪漫
       // data() { return { }}  react 一切皆编程语法  西部牛仔
      members: []
    }
  }

  public componentDidMount() {   // vue mounted 
    // ts 虽然多写了些代码 , 但是会减少很多调试， 反而省时间
    memberAPI   // 类型
      .fetchMembers() // 感情化写代码 ts java 步步惊心  promise 
      .then(members => {
        console.log(members);
        this.setState({
          members
        })
      })
  }

  public render() { // 必须实现的接口  ts java 
    return (
      <div className="row">
        {/* fdasfasfadsf */}
        <h2>Members　Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
          {
            // v-for    react 
           this.state.members.map(member => 
            <MemberRow 
              key={member.id}
              member={member}
            />
           )
          }
          </tbody>
        </table>
      </div>
    )
  }
}