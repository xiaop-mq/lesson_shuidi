let time = '2020/3/11 14:10:0';

/* 1.把原始字符串中代表时间的值都获取到，最后拼接成为我们想要的即可 */
let arr = time.split(' '); //=>["2020/3/11", "14:10:0"]
let arrLeft = arr[0].split('/'); //=>["2020", "3", "11"]
let arrRight = arr[1].split(':'); //=>["14", "10", "0"]
arr = arrLeft.concat(arrRight); //=>["2020", "3", "11", "14", "10", "0"]

// 在拼接之前，需要把ARRLEFT和ARRRIGHT中不足两位的数字，前面补充零
arr = arr.map(item => item.length < 2 ? '0' + item : item);
time = `${arr[0]}年${arr[1]}月${arr[2]}日 ${arr[3]}时${arr[4]}分${arr[5]}秒`;

console.log(time);//=>"2020年03月11日 14时10分00秒"

// 思路简单，但不够灵活


// 字符串截取联合简单正则处理(1)
let time = '2020/3/11 14:10:0';

let arr = time.match(/\d+/g); //=>["2020", "3", "11", "14", "10", "0"]
arr = arr.map(item => item.length < 2 ? '0' + item : item);
time = `${arr[0]}年${arr[1]}月${arr[2]}日 ${arr[3]}时${arr[4]}分${arr[5]}秒`;

console.log(time);//=>2020年03月11日 14时10分00秒



// 字符串截取联合简单正则处理(2)
let time = '2020/3/11 14:10:0';

// 不足十位补充零的操作封装为一个方法
function zero(val) {
    return val.length < 2 ? '0' + val : val;
}

let arr = time.split(/(?: |\/|:)/g); //=>["2020", "3", "11", "14", "10", "0"]
time = `${arr[0]}年${zero(arr[1])}月${zero(arr[2])}日 ${zero(arr[3])}时${zero(arr[4])}分${zero(arr[5])}秒`;

console.log(time);//=>2020年03月11日 14时10分00秒

