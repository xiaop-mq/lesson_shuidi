- 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

 
示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

## 方法一：递归
- 以翻译 12258 为例，它可以分解成两个子问题：翻译 1 和 2258、翻译 12 和 258

1. 每次都有 2 种选择，翻译 1 个数、翻译 2 个数
但有的两位数没有对应的字母，只有翻译 1 个数这 1 种选择
2. 2 种选择对应了 2 branch ， 1 种选择的情况对应 1 branch

- 具体实现
1. dfs 函数返回：翻译【从 pointer 位置到末尾的数字】的方法数
2. dfs 的过程中，有 pointer + 1 和 pointer + 2 两种选择，代表两个分支
3. dfs 的入口是 pointer 为 0 ，求整个数字串的翻译方法数
4. dfs 函数中：
- 如果 pointer 和 pointer + 1 对应的两位数在 [10, 25] 内
则分出两个分支：
- 翻译 1 个数，pointer + 1 ，递归调用 dfs ，返回出剩余子串的翻译方法数
- 翻译 2 个数，pointer + 2 ，递归调用 dfs ，返回出剩余子串的翻译方法数
- 二者相加，就是当前数字串的翻译方法数
5. 如果 pointer 和 pointer + 1 对应的两位数超出 [10, 25]
则只有一个分支
6. 翻译 1 个数，pointer + 1 ，递归调用 dfs ，返回出剩余子串的翻译方法数

