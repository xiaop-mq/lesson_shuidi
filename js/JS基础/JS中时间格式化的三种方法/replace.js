let time = '2020/3/11 14:10:0';

time = time.replace('/', '年').replace('/', '月').replace(' ', '日 ').replace(':', '时').replace(':', '分') + '秒';

console.log(time); //=>2020年3月11日 14时10分0秒

// 缺点：没有实现不足十位数字的补充0；