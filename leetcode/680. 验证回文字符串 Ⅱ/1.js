function isPali(str, l, r) { // 辅助函数
    while (l < r) { // 指针相遇，结束循环
        if (str[l] !== str[r]) { // 一票否决
            return false
        }
        l++ // 指针挪动，相互逼近
        r--
    }
    return true // 没有遇到不同返回true
}
var validPalindrome = function (str) {
    let l = 0; r = str.length - 1 // 创建双指针
    while (l < r) {
        if (str[l] !== str[r]) { // 转为判断删掉左右指针字符之一的字串，是否为回文串。
            return isPali(str, l + 1, r) || isPali(str, l, r - 1)
        }
        l++
        r--
    }
    return true;
}