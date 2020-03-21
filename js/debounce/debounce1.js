/**
 * 事件会被频繁的触发
 */

var count = 1; // 初始值为 1 
// 在文档中查找值
var container = document.getElementById('container'); 

function getUserAction() {
    container.innerHTML = count++; // 容器里的数字自增
};

container.onmousemove = getUserAction; //鼠标触发事件