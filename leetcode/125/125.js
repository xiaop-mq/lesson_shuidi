// Palindrome 从前往后读和从后往前读都是一样的
var isPalindrome = function(s) {

    s = s.toLowCase().replace(/[\W_]/g,"");// 直接修改字符串
    if(s.length<2){
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};