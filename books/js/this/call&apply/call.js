var foo = {
    value: 1
};
function bar(){
    console.log(this.value); // 改变指向
}
bar.call(foo);

// 模拟实现第一步
// 调用call的时候，把foo对象改造如下
var foo = {
    value: 1,
    bar: function(){
        console.log(this.value)
    }
};
foo.bar();
// this就指向了foo