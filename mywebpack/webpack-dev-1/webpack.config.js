// webpack 是node写出来的 node的写法
let path = require('path') // 内置模块 不需要安装
let HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve('dist'))
module.exports = {
    devServer:{ // 开发服务系统的配置
        port:3000,
        progress:true,
        contentBase:'./build', //
        compress:true
    },
    mode:'production',// 模式 默认两种 production development
    entry:'./src/index.js',//入口：从哪个地方开始打包
    output:{
        filename:'bundle.[hash:8].js', // 打包后的文件名
        //__dirname 以当前目录结构出dist目录
        path:path.resolve(__dirname,'build'),// 文件放到哪里去？路径必须是绝对路径
    },
    plugins:[ // 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true, // 删除属性的双引号
                collapseWhitespace:true, //代码变成一行
            },
            hash:true
        })
    ]
}