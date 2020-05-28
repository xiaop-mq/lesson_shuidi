// 正则表达式解决
// var decodeString = function(s) {
//     let reg = /(\d+)\[([a-zA-Z]+)\]/g; // 匹配K个字符串
//     while(s.indexOf('[')>0){
//         s = s.replace(reg,(_,...[num,str])=>{
//             let result = "";
//             for(let i=0;i<num-0;i++){
//                 result += str;
//             }
//             return result;
//         });
//     }
//     return s;
// };

var decodeString = function (s) {
    let stack = []; // 保存需要 repeat 的字符串
    let times = ''; // 乘以的倍数

    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];

        if (/[0-9]/.test(item)) {
            if (i === 0 || /[0-9]/.test(s[i - 1])) {
                times += item;
            } else {
                times = item
            }
        } else if (item === '[') {
            times && stack.push(Number(times));
            times = '';
        } else if (item === ']') {
            var curr = stack.pop();
            var temp = '';
            while (typeof curr !== 'number') {
                temp = curr + temp;
                curr = stack.pop();
            }
            temp = temp.repeat(curr);
            stack.push(temp);
        } else {
            stack.push(item);
        }
    }
    return stack.join('');
};


