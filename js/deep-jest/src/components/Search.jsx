import React from 'react';

{/* <Search onSubmit={} /> */ }
class Search extends React.Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleKeyUp = (e) => {
        const { content } = this.state;
        if (e.keyCode === 13 && content) {
            this.props.onSubmit(content);
            this.setState({ content: '' })
        }
    }
    render() {
        // 受控组件:受组件状态控制
        // 非
        <input type="text" value={this.state.content}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
        />
    }
}

export default Search;