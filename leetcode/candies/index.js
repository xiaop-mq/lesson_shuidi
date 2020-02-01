//es6的新特性
var distributeCandies = function (candies){
    var count = 0;//总类数 unique=>不重复类名的总数
    let obj = {};
    //糖果种类数
    candies.forEach(function(item){
        //如果出现过
        if(!obj[item]){
            obj[item] = 1;//出现过了
            count++;//加上总类数
        }
    });

    return count >= ( candies.length/2 ) ?
    (candies.length >> 1) :count;//右移一位
}

console.log(distributeCandies([1,1,2,2,3,3]));