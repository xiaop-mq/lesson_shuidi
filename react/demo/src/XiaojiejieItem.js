import React, { Component } from 'react';

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    state = {  }
    render() { 
        return (  
        <li onClick={this.handleClick.bind(this)}>{this.props.content}</li>
        );
    }
    handleClick(){
        // this.props.list=[]
        // console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
}
 
export default XiaojiejieItem;