import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component {
    constructor(props) {
        // 数据初始化
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            // flex
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="xiaop">增加服务</label>
                    <input id="xiaop" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (

                                <div>
                                    <XiaojiejieItem 
                                        key={index+item}
                                        content={item} 
                                        index={index}
                                        list={this.state.list}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                </div>

                            )

                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: e.target.value
        })
    }

    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            // list:['基础按摩','精油推背',this.state.inputValue]
            inputValue: ''
        })
    }
    // 删除列表项
    deleteItem(index) {
        // console.log(index)
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie