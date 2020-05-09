## Hooks总览，拥抱函数式

- 动机
1. 在组件间复用状态逻辑很难
2. 复杂组件变得难以理解
3. 难以理解的class
- 什么是Hooks？
那么什么是Hook，Hook顾名思义就是钩子的意思。在函数组件中把React的状态和生命周期等这些特性钩入进入，这就是React的Hook。
- Hooks的使用规则
1. 只能在函数的最外层调用hook。
2. 只能在React的函数组件中调用Hook。
- 使用Hooks的好处
1. 使用hooks，如果业务变更，就不需要把函数组件修改成类组件。
2. 告别了繁杂的this和合并了难以记忆的生命周期。
3. 支持包装自己的Hooks(自定义Hooks)，是基于纯命令式的api。
4. 更好的完成状态之间的共享，解决原来class组件内部封装的问题，也解决了高阶组件和函数组件的嵌套过深。一个组件一个自己的state，一个组件内可以公用。
内置的Hook
React一共内置了9种Hook。

useState
usEffect
useContext
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
- useState
现在State Hook 可以让函数式组件使用状态。
useState是React的一个Hook，它是一个方法，可以传入值作为state的默认值，返回一个数组，数组的第一项是对应的状态(默认值会赋予状态)，数组的第二项是更新状态的函数。
- 使用多次useState
在一个组件中我们不可能只有一个state，useState允许在一个组件中使多次，并且每次使用都是一个全新的状态。

- useEffect
React Hooks 提供了 Effect 
useEffect这个方法传入一个函数作为参数，在函数里面执行副作用代码，并且useEffec的第一个参数还支持返回值为一个函数，这个函数执行相当于组件更新和卸载

- useContext
React16中更新了Context API，Context主要用于爷孙组件的传值问题，新的Context API使用订阅发布者模式方式实现在爷孙组件中传值。
在我的博客中我写了一篇简单的使用方法Context API，不了解的可以参考一下。

useReducer
看到useReducer,肯定会想到Redux，没错它和Redux的工作方式是一样的。useReducer的出现是useState的替代方案，能够让我们更好的管理状态。
useReducer一共可以接受三个参数并返回当前的state与其配套的dispatch。
1. 第一个参数
useReducer的第一个参数就是形如(state,action) => newState这样的reducer，没错就是reducer，和redux完全相同。我们来定义一个简单的reducer。
2. 第二个参数
useReducer的第二个参数和Redux的createStore也相同，指定状态的默认值
3. 第三个参数
useReducer的第三个参数接受一个函数作为参数，并把第二个参数当作函数的参数执行。主要作用是初始值的惰性求值，把一些对状态的逻辑抽离出来，有利于重置state。
- useCallback
useCallback可以认为是对依赖项的监听，把接受一个回调函数和依赖项数组，返回一个该回调函数的memoized(记忆)版本，该回调函数仅在某个依赖项改变时才会更新。

- useMemo
useMemo和useCallback很像，唯一不同的就是

useCallback(fn, deps) 相当于 useMemo(() => fn, deps

- useRef
React16出现了可用Object.createRef创建ref的方法，因此也出了这样一个Hook。
useRef返回一个可变的ref对象，useRef接受一个参数绑定在返回的ref对象的current属性上，返回的ref对象在整个生命周期中保持不变

- useImperativeHandle

useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。

就是说：当我们使用父组件把ref传递给子组件的时候，这个Hook允许在子组件中把自定义实例附加到父组件传过来的ref上，有利于父组件控制子组件。


useLayoutEffect
这个钩子函数和useEffect相同，都是用来执行副作用。但是它会在所有的DOM变更之后同步调用effect。useLayoutEffect和useEffect最大的区别就是一个是同步一个是异步。
从这个Hook的名字上也可以看出，它主要用来读取DOM布局并触发同步渲染，在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。
官网建议还是尽可能的是使用标准的useEffec以避免阻塞视觉更新。

- Hook的执行机制
第一个：函数调用完之后会把函数中的变量清除，但ReactHook是怎么复用状态呢
React 保持对当先渲染中的组件的追踪，每个组件内部都有一个「记忆单元格」列表。它们只不过是我们用来存储一些数据的 JavaScript 对象。当你用 useState() 调用一个Hook的时候，它会读取当前的单元格（或在首次渲染时将其初始化），然后把指针移动到下一个。这就是多个 useState() 调用会得到各自独立的本地 state 的原因。
之所以不叫createState，而是叫useState，因为 state 只在组件首次渲染的时候被创建。在下一次重新渲染时，useState 返回给我们当前的 state。

- React是怎么区分多次调用的hooks的呢，怎么知道这个hook就是这个作用呢？

React 靠的是 Hook 调用的顺序。在一个函数组件中每次调用Hooks的顺序是相同

- 自定义Hook
自定义hooks可以说成是一种约定而不是功能。当一个函数以use开头并且在函数内部调用其他hooks，那么这个函数就可以成为自定义hooks，比如说useSomething。
自定义Hooks可以封装状态，能够更好的实现状态共享。
