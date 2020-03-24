// 消去法 
var isValid = function (s) {
    while (s.length) { //循环数组
        var temp = s;
        s = s.replace('()', '');
        s = s.replace('[]', '');
        s = s.replace('{}', '');
        if (s == temp) return false
    }
    return true;
};
