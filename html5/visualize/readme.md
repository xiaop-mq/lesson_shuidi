- 数据可视化
- 使用requestAnimationFrame 请求运动帧
游戏开发中使用requestAnimationFrame 来代替setInterval
添加了animation的函数
 function animation() {
     console/log('----汪');
     requestAnimationFrame(functon(){//限制自己调动自己的频率
         animation(); //递归 自己调动自己会出现内存泄漏问题
     })
     
 }
 animation();
 - canvas是一个画布
 有绘制的API 画布的默认大小？
 canvas.style.width 标准的（任何一个元素）必须给单位 （单位太多 只能规定样式）
 canvas.width 设置html属性 不是样式的某个属性单位 只接受数值


 ctx = canvas.getContext('2d');在2d的环境中绘制画布
 ctx.fillStyle = 'red';画布字体颜色
 ctx.fillText(2,100,100);文字坐标位置 一直画
 requestAnimation + clearEact();一直画的时候不断查出之前的东西