let x = '10';
switch (x) {
    case 1: //=>在x等于1的情况下做什么
        x += 1;
        break; //=>每一种情况结束都要设置break（以供当此条件成立并处理完事情后，通知代码不在向下执行）
    case 5:
        x += 2;
        break;
    case 10: //=>'10'===10  FALSE
        x += 3;
        break;
    default: //=>等价于else，而且最后一个判断结束无需设置break
        x += 4;
}
console.log(x); //=>'104'  每一种case情况都是基于 === 进行比较的（严格比较，需要保证数据类型的一致）
