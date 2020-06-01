// 原理：利用a标签本身的内置属性

// 在JS中获取的A元素对象，包含很多内置属性，我们可以看到如下几个属性，存储对于HREF地址的解析：

// search:'?lx=1&name=JS&from=baidu',
// hash:'#video',
// host:'www.xxxxxxx.cn',
// ......



// 利用这些属性信息我们就可以轻松完成需求；


function queryURLParams(url) {
	// 1.创建A标签（A元素对象）来获取到问号参数和哈希值
	let link = document.createElement('a');
	link.href = url;
	let askText = link.search.substr(1),
		polText = link.hash.substr(1),
		obj = {};
	// 2.向对象中进行存储
	polText ? obj['HASH'] = polText : null;
	if (askText) {
		let arr = askText.split(/(?:&|=)/g); //=>同时按照两个字符来拆分：["lx", "1", "name", "JS", "from", "baidu"]
		for (let i = 0; i < arr.length; i += 2) {
			// console.log(arr[i], arr[i + 1]); 属性名和属性值
			obj[arr[i]] = arr[i + 1];
		}
	}
	return obj;
}
let result = queryURLParams('http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video');
console.log(result);

/* <a href="http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video" id="link">*/

