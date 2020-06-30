module.exports = function (params) {
    console.log('b');
}

// exports.a = 1;
// module.exports.d = 3;
// module.exports = {
//     b: 2
// }
module.exports = exports = {
    c: 2
}
// 1.module.exports === exports 导出的时候
// 可互相替换 全等的 module.exports === exports

// 2. module.exports = exports = {}