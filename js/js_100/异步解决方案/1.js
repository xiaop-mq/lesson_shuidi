// setTimeout
console.log('script start') 
setTimeout(function(){
    console.log('settimeout')
})
console.log('script end') 
// 输出顺序：script start->script end->settimeout




console.log('script start')
let promise1 = new Promise(function (resolve) {
    console.log('promise1')
    resolve()
    console.log('promise1 end')
}).then(function () {
    console.log('promise2')
})
setTimeout(function(){
    console.log('settimeout')
})
console.log('script end')
// 输出顺序: script start->promise1->promise1 end->script end->promise2->settimeout


async function async1(){
    console.log('async1 start');
     await async2();
     console.log('async1 end')
 }
 async function async2(){
     console.log('async2')
 }
 
 console.log('script start');
 async1();
 console.log('script end')
 
 // 输出顺序：script start->async1 start->async2->script end->async1 end

 


async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/