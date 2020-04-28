import * as React from 'react';
import { MemberEntity } from '../../model';

interface Props {
  memers: MemberEntity[],
  fetchMembers(): void;
}

export class MembersPage extends React.Component<Props, {}>{
  constructor(props) {
    super(props); // 继承
    this.state = { members: []}
  }

  public componentDidMount() {
    console.log('ddddd');
    this.props.fetchMembers();
  }

  public render() {
    return (
      <div className="row">
        <h2>Members Page</h2>
        <table className="table">
         
          <tbody>
            {
              // 为什么还报错
              this.props.memers
            }
          </tbody>
        </table>
      </div>
    )
  }
}