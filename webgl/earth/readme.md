- cdn Content Delivery Network(内容开发网络)介绍：
 （刘强东）很早就预言了快递网络
  src => 请求和相应的过程
  url => 通过cdn解析为ip地址
  京东 iphone11 www.jd.com/js/a.js  localhost
  localhost - www.a.com
  www.jd.com 主站点后端业务为主的服务 
  任务就很重 css js image
  1.把我们的静态资源独立起来 交给cdn 网络分发
  2.静态资源要快 各地部署
  3.首先询问cdn.bootcss.com 帮忙做一个转发给你一个ip地址

  - three.min.js 很大 交给cdn网络
    上传的图片也很大 把它交给cdn, 放进七牛云
  - 组合了canvas做渲染容器+camera（选择透视渲染 近角是0）> sence >group>mesh
     > 物体是 = geometry(形状)+material(衣服和形状是可以分开来的)
      最后renderer(全部渲染)出去
      
  - webgl 3d编程 是一个以相机视角，来构建的真实事件