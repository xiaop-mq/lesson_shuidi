// 原理：利用字符串indexOf检测索引位置，
// substring截取字符串，
// split按指定符号转为数组...等一系列的字符串内置方法完成需求；
function queryURLParams(url) {
	// 1.首选获取问号和井号后面的值
	let askIndex = url.indexOf('?'),
		polIndex = url.lastIndexOf('#');
	let askText = url.substring(askIndex + 1, polIndex),
		polText = url.substring(polIndex + 1);
	// console.log(askText, polText); //=>"lx=1&name=JS&from=baidu"  "video"

	// 2.把获取到的结果进行解析，最后拼成一个对象返回
	let obj = {};
	// 处理哈希值（井号后面的值）
	polText.length > 0 ? obj['HASH'] = polText : null;
	// 问号参数的处理
	if (askText) {
		// askText.split('&') =>["lx=1","name=JS","from=baidu"]
		askText.split('&').forEach(item => {
			// item：循环数组中的每一项
			let arr = item.split('='), //=>"lx=1" => ["lx",1]
				key = arr[0],
				value = arr[1];
			obj[key] = value;
		});
	}
	return obj;
}

