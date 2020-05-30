// var a = 2; 变量的查询 LHS查询
// 试图找到容器变量的本身，从而对其赋值
// RHS查询 简单的查找某个变量的值别无二致 = 出现在赋值计算的右侧

function changeObjProperty(o) { // o形参 是LHS 还是RHS查询？
  // let o = webSite 形参传过来就有一个赋值的操作
  // 然后这里改变的是一个对象，所以同个指向的两个属性都改变
    o.siteUrl = "http://www.baidu.com";
    // 和之间没有关系 o用于查询
    o = new Object(); // 这里是给o改变了指向，但是形参传过来的没改变
    // 分配了新的对象 LHS查询 在堆空间中申请空间
    //  形参 o 的指向发生改变，指向堆内存中一个新的对象
    o.siteUrl = "http://www.google.com"; // 新的地址 不被影响
  }
  
  
  let webSite = new Object(); // 对象自变量 复杂数据类型
  changeObjProperty(webSite); // 引用式赋值
  console.log(webSite.siteUrl); // baidu

  // 赋值操作的目标是谁（LHS）”
  // “谁是赋值操作的源头（RHS）”

  // 函数调用，形参传过去就是执行