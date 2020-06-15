const s = new Set();
[1, 2, 3, 4, 3, 2, 1].forEach(x => s.add(x));

for(let i of s){
    console.log(i) // 1 2 3 4
}
// 去重数组的重复对象
let arr = [1, 2, 3, 2, 1, 1]
// [...new Set(arr)] // [1, 2, 3]


let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // set {NaN}

let set1 = new Set()
set1.add(5)
set1.add('5')
console.log([...set1]) // [5, "5"]