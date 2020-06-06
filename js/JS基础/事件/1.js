box.style.transition = 'opacity 1s';
box.ontransitionend = function () {
	console.log('哇咔咔~~');
}

box.addEventListener('transitionend', function () {
	console.log('哇咔咔~~');
}); 

window.addEventListener('load', function () {
	//=>所有资源都加载完成触发
	console.log('LOAD');
});
window.addEventListener('DOMContentLoaded', function () {
	//=>只要DOM结构加载完就会触发
	console.log('DOMContentLoaded');
}); 

//=>$(document).ready(function(){})
$(function () {
	//=>JQ中的这个处理（DOM结构加载完触发）采用的就是DOMContentLoaded事件，并且依托DOM2事件绑定来处理，所以同一个页面中，此操作可以被使用多次
});
/* JQ中的事件绑定采用的都是DOM2事件绑定，例如：on/off/one */
