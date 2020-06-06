function _assignDeep(obj1, obj2) {
    // 先把OBJ1中的每一项深度克隆一份赋值给新的对象
    let obj = _cloneDeep(obj1);

    // 再拿OBJ2替换OBJ中的每一项
    for (let key in obj2) {
        if (!obj2.hasOwnProperty(key)) break;
        let v2 = obj2[key],
            v1 = obj[key];
        // 如果OBJ2遍历的当前项是个对象，并且对应的OBJ这项也是一个对象，此时不能直接替换，需要把两个对象重新合并一下，合并后的最新结果赋值给新对象中的这一项
        if (typeof v1 === "object" && typeof v2 === "object") {
            obj[key] = _assignDeep(v1, v2);
            continue;
        }
        obj[key] = v2;
    }
    return obj;
}
