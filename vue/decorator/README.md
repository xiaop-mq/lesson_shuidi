1. table 删除前要注意 提醒
2. 阿里的面试题   es7 decorator 特性 
Decorator（装饰器，修饰器，实例方法）
- @开头后跟装饰方法名
  装饰方法解析：
    每个decorator只是一个方法， 可以是自定义的或者内置的（如内置的@staticmethod/@classmethod）。decorator方法把要装饰的方法作为输入参数，在函数体内可以进行任意的操作(可以想象其中蕴含的威力强大，会有很多应用场景)，只要确保最后返回一个可执行的函数即可（可以是原来的输入参数函数， 或者是一个新函数）。decorator的作用对象可以是模块级的方法或者类方法。decorator根据应用时的参数个数不同分为两类：无参数decorator，有参数decorator。下面分别介绍。
-  类装饰器 和 方法装饰器，当然也会有属性装饰器