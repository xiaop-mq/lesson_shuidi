## 1. CSS水平垂直居中方式
1. 使用flex  
在父盒子设置display: flex;justify-content: center;align-items: center
2. 使用css的transform 
父盒子设置:display:relative 
Div 设置: transform: translate(-50%，-50%);position: absolute;top: 50%;left: 50%;
3. display：table-cell  
父盒子设置:display:table-cell; text-align:center;vertical-align:middle; 
Div 设置: display:inline-block;vertical-align:middle;

## 2. 清理浮动的方式以及其优缺点
- 给父级元素定义高度：解决父级元素高度无法获取的问题。
优点：代码简洁。  缺点：高度被固定死了，是适合内容固定不变的模块。
- 定义空元素，并且添加样式clear:both;
优点：浏览器支持好。 缺点：多出很多空div标签。
- 让父级元素一起浮动起来
优点：可以解决当前问题。 缺点：会产生新的浮动问题
- 父级元素定义display:table。
优点：不解 缺点：产生新的未知问题
- 包含浮动元素的父级标签添加样式overflow为hidden、auto
优点：代码简洁，不存在结构和语义化问题。
缺点：无法显示需要溢出的元素
- 父级div定义伪类after和zoom
优点：语义化和结构正确，代码量适中，可重复利用率高。
缺点: 代码不简洁


## 4.字符串首字母大写
```js
function titleCase(str) {
    // 转小写及分割成数组
    var stringArr = str.toLowerCase().split(" ");
    for (var i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].slice(1);
    }
    return stringArr.join(" ");
}
```

## 5.找出出现次数最多的字母
```js
function getStr(str){
    var str = str.split('');
    var newStr = {};
    var theMax = 0;
    str.forEach(function(item){
        if(newStr[item]){
            newStr[item]++;
        }else {
            newStr[item] = 1;
        }
    });
    for(str in newStr){
        if(newStr[str] > theMax){
            var maxStr =[];
                theMax = newStr[str];
                maxStr.push(str);
        }else if(newStr[str] == theMax){
            theMax = newStr[str];
            maxStr.push(str);
        }
    }
    console.log('以下字母出现次数最多，出现次数为：'+theMax +'次');
        for(var i= 0;i<maxStr.length;i++){
        console.log(maxStr[i]);
    }
}
var testStr = 'aabckaas';
getStr(testStr);
```