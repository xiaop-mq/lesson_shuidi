## 入门学习-线性回归的小demo
- 规则
  平时我们写的代码都是规则
- tfjs可以在前端浏览器跑也可以在后端Node跑，我们今天就选择在前端跑起来
- tf机器学习（ML）
  人    经验
  机器  规则
  eg:写个算法 是在写规则
     二叉树前序遍历好了(preorder)[根左右]自己写的规则
  eg:用户登录 规则
- 机器学习 靠已有的经验去完成判断 不靠规则只靠经验
 eg:判断一张图片是不是猫？
    可以找张猫的图片 写好猫的图片规则 可以写代码
    图片是由像素点构成的 像素点的判断 
    但是猫的种类千奇百怪 规则太多 写不了
    我们就可以把猫的图片交给机器学习  找其他动物图片 让机器不断学习 学完之后就有经验了
    再给张新图片 在判断图片是不是猫 而机器学习的过程我们就成为我们训练一个模型
    机器学完之后 这个模型就训练好了
- 自己训练一个模型：线性回归（js训练:python转为js）
  训练完模型 一劳永逸。
  别人训练好的：python
- 线性关系：两个变量之间存在一次方函数关系，就称它们之间存在线性关系。
- 我们选择vue 因为vue能够帮我们处理的哪些es6模块化在现在的浏览器里面能够运行起来
  我们借助下vue脚手架 帮助我们开发更加舒适
- 步骤
   安装：npm i @tensorflow/tfjs @tensorflow/tfjs-vis -s
   1. 准备数据：让机器学习已有数据 得到经验