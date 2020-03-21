/**
 * 使用正确的this指向
 */
var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    console.log(this) //了解this是什么？ this=<div id="container">数值</div>
    container.innerHTML = count++;
};

container.onmousemove = debounce(getUserAction, 1000);

// 第二版 this正确指向数值
function debounce(func, wait) {
	var timeout;

	return function () {
		var context = this;

		clearTimeout(timeout)
		timeout = setTimeout(function(){
			func.apply(context)
		}, wait);
	}
}