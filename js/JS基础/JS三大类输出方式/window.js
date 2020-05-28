// window框提示类
// 是在浏览器窗口中弹出一个提示框,提示框中输出指定的信息
// 1.alert
// 特点:需要等到alert弹出框,点击确认关闭后,后面的代码才会执行(alert会阻碍主线程的渲染)
// alert弹出的内容都会默认转换为字符串(toString)
alert('今天大家都很认真!')
console.log(100);
alert([10,20,30]); // 数组转换成字符串的结果是10,20,30
alert({name:'小彭'}); // 普通对象转换成字符串结果[object,object]

// 2.confirm
// 创建一个变量,用来接收用户选择的结果
let flag = confirm('今天xiaop学习了吗');
console.log(flag);
// 点击确认返回true 取消返回false

// 与alert区别:给用户提供了确定和取消两种选择

// 3.prompt
// 特点: 点击取消返回null结果
// 点击确定会把用户输入的原因信息返回
let reason = prompt('确定要删除此信息吗？')
console.log(reason);

// 与confirm区别：在confirm基础上提高书写操作等信息。

