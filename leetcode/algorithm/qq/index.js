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