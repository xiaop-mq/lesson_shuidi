function sum() {
	//  循环ARGUMENTS中的每一项（每一个传递进来的实参），都累加给TOTAL，最后就能求出和了
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		// 把传递进来的实参信息都转换为数字：排除掉非有效数字或者字符串
		let item = Number(arguments[i]);
		if (!isNaN(item)) {
			// 有效数字
			total += item;
		}
	}
	console.log(total);
}
sum(); //=>0
sum(10); //=>10
sum(10, 20); //=>30
sum(10, 20, 30, 40); //=>100
sum(10, 20, 'AA'); //=>30 过滤掉非有效的数字
sum(10, '20'); //=>30 如果是字符串，不能是字符串拼接，还应该是数学相加


//==============箭头函数（ES6中新定义的创建函数的方式）
let func = (x, y) => {
	// x和y是形参变量
	// 大括号中还是函数体
};
func(10, 20);


//=>箭头函数可以简化函数编写的方式：如果函数体中只有一句RETURN，则可以忽略大括号和RETURN 
let sum = (x, y) => x + y;

function sum(x, y) {
	return x + y;
}

function func(x) {
	return function (y) {
		return x + y;
	}
}
let func = x => y => x + y;
