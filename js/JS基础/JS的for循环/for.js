// 1.
for (var i = 0; i < 5; i++) {
	console.log(`本轮循环i的值是：${i}`);
}
console.log(`循环结束后，此时的i已经变为：${i}`);

/*
 * 初始值：i=0 
 *    0<5 成立的
 *      0<3成立  i++  i=1  =>1
 *      i+=2  i=3
 *    3<5 成立的
 *      3<3 不成立  =>3
 *      i+=2  i=5
 *    5<5 不成立 循环结束
 */


//  2. 
for (var i = 0; i < 5; i += 2) {
	if (i < 3) {
		i++;
	}
	console.log(`本轮循环i的值是：${i}`);//=> 1 , 3
}
console.log(`循环结束后，此时的i已经变为：${i}`);//=> 5


// 3.
// 此题需要注意的是，
// 循环体中可以不定义初始值，但必须用分号隔开（占位），
// 且循环体中变量在全局作用域下可查询，
// 步长累加也可省略，同样必须用分号占位
var n = 10;
for (; n > 0;) {
	if (n > 5) {
		n -= 2;
	} else {
		n -= 3;
	}
}
console.log(`循环结束后，此时的i已经变为：${n}`);  //=>-2




for (var i = 0; i < 5; i++) {
	if (i > 3) {
		// i=4 的时候，遇到了break，此时循环结束
		break;
	}
	console.log(`本轮循环i的值是：${i}`); //=> 0 1 2 3 
}
console.log(`循环结束后，此时的i已经变为：${i}`); //=>4




for (var i = 0; i < 5; i++) {
	if (i > 2) {
		i += 1;
		//=>i=3 i++ =>i=4 遇到continue：本轮循环结束（下面输出不执行，但是i++会执行）
		continue; 
	}
	console.log(`本轮循环i的值是：${i}`); //=>0 1 2 
}
console.log(`循环结束后，此时的i已经变为：${i}`); //=>5



for (var i = 0; i < 10; i++) {
	if (i >= 2) {
		i += 2;
		continue;
	}
	if (i >= 6) {
		i--;
		break;
	}
	i++;
	console.log(i); //=>1
}
console.log(i); //=>11



var arr = [10, 20, 30, 40, 50];
for (var i = 0; i < arr.length; i++) {
	// arr.length = 5
	// 第一轮循环 i=0
	arr[0]
	// 第二轮循环 i=1
	arr[1]
	// ....
	// 第五轮循环 i=4
	arr[4]
	每一轮循环i变量存储的值就是我们当前这一轮想获取数组中当前项的索引

	console.log(arr[i]);
}
