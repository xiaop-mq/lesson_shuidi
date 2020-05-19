// 打包html，有一个插件
// cnpm i html-webpack-plugin -D

const HtmlWebpackPlugin = require('html-webpack-plugin') //new一次打包的时候就能生成一个html 里面可以指定htl的模板（template)
// new完后有一个chunks的选项，就是这个当前html里面引入的js的文件有哪些，为什么要有这个，js的打包
// 打包是顺着入口打包的entry，默认一个入口能打包出来一个结果，不做别的修改的时候
// 因为用了react，就要用相关的配置
// 目前我们这两个文件都是包含了react 和react-dom的，在webpackage中有一个公共依赖的抽取，
// 抽离出来公共依赖，到一个公共的文件中，html中就不用都引入了
// optimization
module.exports = {
    entry: {
      promotion: './src/promotion/index.js', //促销部门引入的js
      pay: './src/pay/index.js' //支付部门引入的js
    },  // 一个入口一个结果
    // 2.
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'] //注意用数组或对象的形式
        }
      ]
    },
    optimization: {
        splitChunks: { //抽离公共依赖
            // 是可以有不同的规则的，不同的规则抽离出来的代码是不一样的
            cacheGroups: { //这里面写不同的抽离规则
                commons: { //这个名字是自己取的
                    // 抽离出来的名字叫
                    name: '',
                    //所有的引入方引入一个资源有哪几种方式 all就是不管是同步还是异步的引入，都可以
                    chunks: 'all',
                    //引入次数超过两次就引入到公共
                    minChunks: 2,
                    // 最小体积，为0，就是只要引入了，就放到公共文件中
                    minSize: 0
                }
            }

        }
    },
    // 1.
    // plugins中可以指定html的模板 template
    plugins: [
      // new 一次生成一个html,这里new了两个
      // index.html
      new HtmlWebpackPlugin({
        template: './src/pay/index.html', //这个可以帮我们打包出来一个文件
        filename: 'pay.html', //要取名字，不然默认是index.html，就会覆盖
        chunks: ['pay']  // 当前 html 引入的 js 文件 有哪些 //entry里面的
      }),
      new HtmlWebpackPlugin({
        filename: 'promotion.html', //第二个入口
        template: './src/promotion/index.html',
        chunks: ['promotion']
      })
    ]
  }
  
//   执行是在package.json build:webpack 然后执行npm run build