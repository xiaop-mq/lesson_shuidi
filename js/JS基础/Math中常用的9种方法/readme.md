- typeof Math => 'object'

一、取绝对值
1、Math.abs()
语法：Math.abs([number value]);
定义：获取绝对值（绝对值永远是整数或者零）
使用：Math.abs(-1);//=>1
注意：传递的不是数字类型的值时：先基于Number()转换为数字在处理

二、取整数
2、Math.ceil()
语法：Math.ceil([number value])
定义：把一个数向上取整
使用：
```js
Math.ceil(1.2);//2
Math.ceil(1.5);//2
Math.ceil(-1.1);//-1
```
3、Math.floor()
语法：Math.floor([number value])
定义：把一个数向下取整
使用：
```js
Math.floor(1.2);//1
Math.floor(-1.2);//-2
```

4、Math.round()
语法：Math.round([number value])
定义：四舍五入
使用：
```js
Math.round(1.5);//2
Math.round(-1.5);//-1
Math.round(-1.51);//-2
```

三、取最大/小值
5、Math.max()
6、Math.min()

四、开方/幂
7、Math.sqrt()
语法：Math.sqrt([number value]);
定义：给一个数开平方
使用：Math.sqrt(9)//=>3
符合N*N=M的M才能开整平方
负数开不了平方

8、Math.pow()
语法：Math.pow(n,m)
定义：n的m次幂
使用：Math.pow(2,3)；//=> 8
Math.pow(2,10)；//=> 1024(程序员世界的整数)

五、取随机数
9、Math.random()

六、圆周率
Math.PI