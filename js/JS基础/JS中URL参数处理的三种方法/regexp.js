// 常规正则处理
(proto => {
	function queryURLParams() {
		let obj = {};
		this.replace(/([^?=&#]+)=([^?=&#]+)/g, (_, key, value) => obj[key] = value);
		this.replace(/#([^?=&#]+)/g, (_, hash) => obj['HASH'] = hash);
		return obj;
	}
	proto.queryURLParams = queryURLParams;
})(String.prototype);

console.log('http://www.xxxxxxx.cn/?lx=1&name=JS&from=baidu#video'.queryURLParams());
