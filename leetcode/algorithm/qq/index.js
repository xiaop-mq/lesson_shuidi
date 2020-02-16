let qq_number = "267426da4426";

//函数表达式
/**
 * 
 * @param qq typeString
 * @return type Bool
 * @功能 判断QQ是否合格 
 * @desc 只能是数字 长度5位或以上，13位以内
 */
const is_valid_qq = (qq) => {
    if(!qq) return false;
    if (/^[0-9]{5,13}$/.test(qq)){
        return true
    }else{
        return false;
    }
    // console.log(qq)
    // .length
    return true;
};
console.log(is_valid_qq(qq_number));

//选择了一种数据结构 数组
let enc_qq = [6,3,1,7,5,8,9,2,4],
 qq = [],
 head = 0, //指针 start 开始
 tail = 9; //尾部 end 指针


//  拿到一个正确的数字，操作原来的两个数字
 while(head < tail) {  // 得到一个正确数字
    qq.push(enc_qq[head]);
    head++;
    //  第二个数移到尾部
    enc_qq[tail] = enc_qq[head]
    //  删除它？
    tail++;
    head++;
 }
 console.log(qq);