// babel-types 强大处理 AST 的节点的工具 工具函数
module.exports = function(babelTypes) {
  const { types } = babelTypes;
  return {
    // babel插件书写固定格式
    visitor: {
      ImportDeclaration(path, { opts }) {
        // path: 该节点所有信息
        console.log(path, opts);
        // 增删改查
        if (!path.node.specifiers[0].imported) return;
        const imported = path.node.specifiers[0].imported.name;
        const local =  path.node.specifiers[0].local
        const source = path.node.source.value;
        // 用 Button antd 这个信息构造 
        // 默认导入 Button
        // 构造出：import Button from 'antd/Button' 对应的 节点
        // ImportDefaultSpecifier：
        // source: StringLiteral()字符串
        // 你要
        // import xxx from '';
        // var num = 123;
        // ECMA 怎么规定的 整个 js ast
        let stringLiteral = types.stringLiteral(`antd/${imported}`)
        let specifies = types.importDefaultSpecifier(local);
        // 生成一个节点
        const node = types.importDeclaration([specifies], stringLiteral)
        // console.log(imported, source);
        // 原来的节点 不用了 替换
        path.replaceWith(node)
      },
      VariableDeclaration(path) {
        // path 变量声明节点
      }
    }
  }
}