function idPalindrome(str) {
    var len = str.length;
    // parseInt()函数可解析一个字符串，并返回一个整数。
    // parseInt(string,radix)
    //   将一个字符串 string 转换为 radix 进制的整数
    // string参数必须的：代表要被解析的字符串
    // radix参数: 可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
    // 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
    // 如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
    var middle = parseInt(len / 2)
    for (var i = 0; i < middle; i++) {
        if (str[i] != str[len - i - 1]) {
            return false;
        }
    }
    return true;
}
var ans = '';
var max = 0;
var len = s.length
for(var i = 0;i<len;i++){
    for(var r = i+1;r<=len;r++){
        var tmpStr = s.substring(i,r)
        if(isPalindrome(tmpStr) && tmpStr.length > max){
            ans = s.substring(i,r)
            max = tmpStr.length;
        }
    }
}
return ans;

