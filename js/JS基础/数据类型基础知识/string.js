// String 用单引号/双引号/反引号,包起来都是字符串
// 1. 将其他数据类型转化为字符串类型
// String([value])
// [value].toString
// 隐式转换:字符串拼接时;把对象转换为数字之前,先要转换位字符串.

// 2.在JS中常用的数学运算
// - %(模)取余数
// 减乘除
// 字符串拼接

// ES6模板字符串
// ${}反引号
// let result = 反引号${year}年${mouth}月${day}日${hours}:${minutes}:${seconds}反引号

let str = `<div class="box" id="box">
	<h2 class="title">哈哈</h2>
	    <ul class="item">
		${[10,20,30].map(item=>{
			return `<li>${item}</li>`;
		}).join('')}
	    </ul>
	</div>`;
	console.log(str); 
