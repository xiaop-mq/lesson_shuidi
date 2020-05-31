## 字符查找
1. charAt: 获取字符串中指定索引对应的字符
2. @params：n：number类型，代表索引
3. @return：返回查找到的字符；找不到返回空字符串（不是undefined）
使用方法：str.charAt(索引)
```js
var str="xuexi"
var res=str.charAt(0);//"x"
var res3=str[0];//"x"
var res2=str.charAt(100);//""
var res4=str[100];//undefined
```
- charAt索引过大或过小时返回空字符串，str[索引]返回undefined

## charCodeAt(作为了解)
- 获取字符串中指定索引对应的ASCII码值（unicode编码值）
- @params：n：number类型，代表索引
- @return：返回查找到的unicode编码值，找不到返回空字符串不是undefined
使用方法：str.charCodeAt(索引)
```js
var str="zheli";
var res=str.charCodeAt(0);//122   对应的就是字母z（10进制值）
String.fromCharCode(122);//z 通过编码值找对应字符
```

## 字符串截取
1. substr
定义：为了实现字符串的截取（在原来字符串中查找到自己想要的）
@params：n,m //选中从索引 n 开始，截取 m 个字符（m不写，截取到末尾）
@return：截取的字符串
```js
let str = 'haohaoxunxitiantianxiangshang'
str.substr(3,6);//==> 'haoxun'
str.substr(3);//==>'haoxunxitiantianxiangshang'截取到末尾
str.substr(3,10000);//==>'haoxunxitiantianxiangshang'截取到末尾（超过索引的也只截取到末尾）
```
2. sunstring
定义：为了实现字符串的截取（在原来字符串中查找到自己想要的）
@params：n,m //选中从索引n开始（包含）到索引m（不包含）结束的字符
@return：截取的字符串
```js
let str = 'haohaoxunxitiantianxiangshang'
str.substring(3,6);//==> 'haox'
str.substring(3);//==>'haoxunxitiantianxiangshang'截取到末尾
str.substring(3,10000);//==>'haoxunxitiantianxiangshang'截取到末尾（超过索引的也只截取到末尾）
```

3. slice(支持负数)
定义：为了实现字符串的截取（在原来字符串中查找到自己想要的）
@params：n,m //选中从索引n开始（包含）到索引m（不包含）结束的字符
@return：截取的字符串
```js
var str="xuexi"
var res=str.slice(0,3);//"xue"

var res1=str.slice();//完全复制
var res1=str.slice(0);//完全复制
```
- 可以支持负数索引（其余两个方法不能是负数索引）
负数索引的规律：用字符串的长度加上负数索引
```js
var str="xuexi"

var res=str.slice(-3,-1);//"ex"
str.slice(2,4)//"ex"
```
substring与slice的区别：substring不支持负数索引

## 检测是否包含某项
1. indexOf
定义：获取字符在字符串中首次出现的索引
@params：x,y //获取x第一次出现位置的索引，y是控制查找的起始位置索引
@return：索引值/-1（字符串中不包含此字符）
```js
let str = 'haohaoxunxitiantianxiangshang'

str.indexOf('a');//==> 1
str.indexOf('@');//==>-1  不存在返回-1
str.indexOf('xunxi');//==>6  验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引
str.indexOf('xunt');//==>-1  不是整体返回-1
str.indexOf('a',7);//==> 13  查找字符串索引7及以后的字符串中，a第一次出现的位置索引

```

2. lastIndexOf
定义：获取字符在字符串中最后一次出现的索引
与indexOf用法相同

3. includes
定义：检测当前字符串中是否包含某个字符
@params：字符
@return：布尔，true 包含，false 代表不包含
使用方法：includes(n)；

```js
if(!str.includes('@'))
    {
        ...
    } //用来判断条件是否成立
```

## 大小写转换
1. toUpperCase
定义：转为大写
@params：无
@return：大写的字符

使用方法：str.toUpperCase()
```js
str.substr(0,1).toUpperCase()+str.substr(1);
//整体为小写的情况下只让第一个字母大写
```
2. toLowerCase
定义：转为小写
@params：无
@return：小写的字符
使用方法：res.toLowerCase()


## 字符串转数组
1. split
定义：把字符串按照指定的分隔符拆分成数组（和数组中的join对应）
@params：分隔符
@return：分隔后的数组

## 字符替换
1. replace
定义：把指定的字符替换成别的字符
@params：老字符（也可以跟正则），新字符；//常用正则应用
@return：替换之后的字符串

使用方法：str.replace("@","哈")
在不使用正则的情况下，一次只能替换一个字符
正则：str.replace(/@/g,"哈");

```js
var str="@feng@feng";
var res=str.replace("@","哈");//"哈feng@feng"
var res=str.replace(/@/g,"哈");//"哈feng哈feng
```