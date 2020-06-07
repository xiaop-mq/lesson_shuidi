import React from 'react';
import { connect } from 'react-redux';
import { getCommentList } from '../../store/actions/homeAction.js';

class Home extends React.Component {
  componentDidMount() {
    const { getCommentList } = this.props
    getCommentList();
  }
  render() {
    const { commentList} = this.props;
    return (
      <div>
        Home
        {
          commentList.map((e, index) => {
            return (
              <li id={e.content}>
                {e.content}
              </li>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { commentList } = state.home;
  return { commentList }
}
const mapDispatchToProps = (dispatch) => {
  // 1: distpatch(action)
  // action 只能是一个对象： { type: 'HOME..', commentList: []}
  // 2: 有了 redux-thunk distpatch(方法)
  return {
    getCommentList() {
      dispatch(getCommentList());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);