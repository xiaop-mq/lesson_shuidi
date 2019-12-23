function Person(name,age){
    this.name=name;
    this.age=age; 
 }
 //这里的toString覆盖了原有的toString=>多态
 Person.prototype.toString=function(){
     return 'i am a person, my name is ' +this.name;
 }
 
 function Man(name,age){
     console.log(arguments,'----');
     //Person是个构造函数，也是一个类，apply可以先理解为call(借一下Person的构造函数) 要把父类的构造函数执行一下arguments参数集合
     Person.apply(this,arguments);//继承父类属性，用apply获得的
 }
 Man.prototype=Object.create(Person.prototype);//类的原型链方法，Person的方法子类都要有
 // Object.create再做一个新对象，模子是Person.prototype
 // var cxc=new Man("陈新初",19);
 // // console.log(cxc.toString());
 // console.log(cxc+"");
 //返回不同的语句，用多态，覆盖掉原来的toString
 Man.prototype.toString=function(){
     return 'i am a 007,my name is' +this.name;
 }
 //要在下面执行
 var cxc=new Man("陈新初",19);
 // console.log(cxc.toString());
 console.log(cxc+"");
 
 // 实例化person类
 var person=new Person('彭彭琴',19);
 console.log(person + "");//并未调用person.toString()方法却打印出来了
 // person + ""对象想要变成字符串，会主动变成字符串，字符串化
 //js 是可以让类型转化的
 
 const arr=['陈新初','陈方闻'];
 // console.log(typeof arr);
 //console.log(arr+"");字符串类型
 // 怎么得到类型是数组类型？
 console.log(Object.prototype.toString.call(arr));//Object ({})是空的对象，.call(arr)借一下前面的方法，执行的对象是arr
 // 会先返回对象，再返回具体类型