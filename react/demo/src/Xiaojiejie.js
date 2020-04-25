import React, { Component, Fragment } from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    // 生命周期：在某一时刻可以自动执行的函数
    constructor(props) {
        // 数据初始化
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }

    // componentWillMount(){
    //     console.log('componentWillMount--------组件将要挂载到页面的时刻')
    // }

    // componentDidMount(){
    //     console.log('componentWillMount--------组件挂载完成的时刻')
    // }

    // shouldComponentUpdate(){
    //     console.log('1-shouldComponentUpdate')
    //     return true
    // }

    // componentWillUpdate(){
    //     console.log('2-componentWillUpdate')
    // }

    // componentDidUpdate(){
    //     console.log('4-componentDidUpdate')
    // }

    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }

    componentDidMount() {
        axios.get('https://jspang.com/detailed?id=46#toc282')
            .then((res) => {
                console.log('axios 获取数据成功:' + JSON.stringify(res))

                this.setState({
                    list: res.data.data
                })
            })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }

    render() {
        // console.log('child-render')
        // console.log('3-render-组件挂载中')
        return (
            // flex
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="xiaop">增加服务</label>
                    <input
                        id="xiaop"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                        <div>
                                            <XiaojiejieItem
                                                key={index + item}
                                                content={item}
                                                index={index}
                                                list={this.state.list}
                                                deleteItem={this.deleteItem.bind(this)}
                                            />
                                        </div>
                                    </CSSTransition>

                                )

                            })

                        }
                    </TransitionGroup>
                </ul>

                <Boss />
            </Fragment>
        )
    }
    inputChange() {
        // console.log(this)
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: this.input.value
        })
    }

    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            // list:['基础按摩','精油推背',this.state.inputValue]
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length)
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