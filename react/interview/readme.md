## 什么是上下文？
在react中我们使用props传递组件树，即使所有的中间件都不需要props传递。上下文则是一种传递props的方式，并且不需要一层层进行传递。

## 什么是HOOKS？
HOOKS是16.8产生的功能。我们要知道的是我们是不能将state放在函数组件中，但是hooks允许我们将state以及其他的功能放在函数组件中。
Hooks使用规则：
- hooks必须在外层使用，不能再条件、循环和嵌套中使用
- hooks应该在函数组件内使用。

## React如何提高性能？
- 尽量避免使用shouldComponent函数。避免了子组件不必要的渲染。
- 函数的不可变性。
- 使用create-react-app来构建项目，可以生成目录结构，以及对项目进行优化。
- 在显示列表或表格时始终使用keys，这会让react更新速度更快。

## 如何在重新加载页面时保留数据？
使用localStorage。

## 如何在react进行API调用？
使用react-thunk.