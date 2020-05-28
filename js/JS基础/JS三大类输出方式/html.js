// 在页面插入类
// 1. document.write:在页面直接写入
// 特点：与alert一样，写入的内容会被转化成字符串

// 2. innerHTML:插入的信息也会变成字符串
// 基于这种方式会把之前的容器给覆盖掉，想要追加，则采用+=的方式
box.innerHTML = 'xiaop';// 会覆盖掉原始的所有内容
box.innerHTML += 'xiaop'; // 在原始内容上继续增加

// innerText(与innerHTML基本相同)
// 唯一区别：innerHTML能够把标签文本进行识别渲染
// innerText 会把所有内容当成普通的文本

// 4.value：给页面的文本框赋值
let userName = document.getElementById('userName');
userName.value = "我是在JS插入的内容"
