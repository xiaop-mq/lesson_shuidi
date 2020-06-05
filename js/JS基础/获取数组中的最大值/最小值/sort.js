ary.sort(function (a, b){
    return a - b;
});
let min = ary[0]
let max = ary[ary.length - 1];
console.log(min, max);