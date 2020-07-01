//打印1~100之间的数
for (var i = 1; i < 100; i++) {
    var a = true;
    for (var j = 1; j < i; j++) {
        //判断i能否被j整除
        if (i % j == 0) {
            //能被整除则说明不是素数，修改布尔值为false
            a = false;
        }
    }
    //打印素数
    if (a) {
        console.log(i);
    }
}	
