// var n = 100;
// console.log(n);
// console.log(window.n);
// m = 200;
// console.log(m);
// console.log(x)


/*
 * 全局上下文中的变量提升
 *     var a;
 *       ->给VO(G)中新增一个全局变量 a
 *       ->给GO中新增一个属性 a
 *       ->默认值都是 undefined
 */
console.log(a); // undefined
if(!('a' in window)){
    // 'a' in window 检测a是否为window的一个属性 =>TRUE
	// !true => FALSE  条件不成立
    var a = 13;
}
console.log(a); // undefined

/*
 * 全局上下文中的变量提升（最新版本浏览器中）
 *     function fn;
 *       ->VO(G)中存在一个fn全局变量
 *       ->GO中存在一个fn属性
 */
console.log(fn); //=>undefined
// fn();//=> undefined() =>Uncaught TypeError: fn is not a function  JS中，一但当前代码报错，那么下面的代码都不会再执行了
if ('fn' in window) { 
	fn(); 
	function fn() {
		console.log('哈哈哈');
	}
}
fn();

//================================================

/*
 * 全局上下文中的变量提升（最新版本浏览器中）
 *     function fn;
 *       ->VO(G)中存在一个fn全局变量
 *       ->GO中存在一个fn属性
 */
console.log(fn); //=>undefined
if ('fn' in window) {  //=>TRUE
	// 进来第一件事情：给FN赋值  fn=function(){ ... }
	fn(); //=>'哈哈哈'
	function fn() {
		console.log('哈哈哈');
	}
}
fn(); //=>'哈哈哈'
