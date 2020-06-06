function _cloneDeep(obj) {
	// 传递进来的如果不是对象，则无需处理，直接返回原始的值即可（一般Symbol和Function也不会进行处理的）
	if (obj === null) return null;
	if (typeof obj !== "object") return obj;

	// 过滤掉特殊的对象（正则对象或者日期对象）：直接使用原始值创建当前类的一个新的实例即可，这样克隆后的是新的实例，但是值和之前一样
	if (obj instanceof RegExp) return new RegExp(obj);
	if (obj instanceof Date) return new Date(obj);

	// 如果传递的是数组或者对象，我们需要创建一个新的数组或者对象，用来存储原始的数据
	// obj.constructor 获取当前值的构造器（Array/Object）
	let cloneObj = new obj.constructor;
	for (let key in obj) {
		// 循环原始数据中的每一项，把每一项赋值给新的对象
		if (!obj.hasOwnProperty(key)) break;
		cloneObj[key] = _cloneDeep(obj[key]);
	}
	return cloneObj;
}
