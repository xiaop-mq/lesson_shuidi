import React,{Component} from 'react'
// 结构赋值如下
// import React from 'react'
// const Component = React.Component 

class App extends Component{
    render(){
        return(
            // JSX:可以在js中写我们的html代码
            <ul className="my-list">
                <li>{false?'xiaop.com':'彭芃芃'}</li>
                <li>I love coding</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'xiaop.com') 
        // var child2 = React.createElement('li',null,'I love coding') 
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}

export default App