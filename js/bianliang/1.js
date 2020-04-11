// 函数中的a并没有通过var关键字声明 所以不会被存放在AO中

// function foo() {
//     console.log(a);
//     a = 1;
// }v

// foo(); // ???

function bar() {
    a = 1;
    console.log(a);
}
bar(); // ???

console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;

