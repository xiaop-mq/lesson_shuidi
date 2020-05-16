function add(a, b) {
    return a + b;
}
function min(a, b) {
    return a - b;
}
function mixin(obj1, obj2) {
    return{
        ...obj1,
        ...obj2
    }
}
// 测试
// let expect = 10;
// let res = add(7, 3);
// if (expect !== res) {
//     throw new Error('add 出错了')
// }

// let expect = 4;
// let res = min(7, 3);
// if (expect !== res) {
//     throw new Error('min 出错了')
// }

// 断言库
function should(result) {
    return {
        equal: function (expect) {
            if (result !== expect) {
                throw new Error('不通过');
            }
        }
    }
}
// 测试封装
function it(desc, fn) {
    try {
        fn();
        console.log(`√: ${desc} pass`)
    } catch {
        console.log(`X: ${desc} fail`)
    }
}
it('test add', () => {
    should(add(7, 3)).equal(10);
})
it('test min', () => {
    should(min(7, 3)).equal(4);
})
it('test mixin', () => {
    let obj = mixin({ a: 1 }, { b: 2 })
    should(obj).equal({ a: 1, b: 2 })
})
// 哪一项测试不通过
// 后面无法进行


