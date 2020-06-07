- 给定连个单词和一个字典wordList,找出所有从beginWord到endWord的最短序列。转换需要遵循如下规则：
1. 每次转换只能改变一个字母
2. 转换过程中的中间单词必须是字典中的单词
说明：
- 如果不存在这样的转换序列，返回一个空列表
- 所有单词具有相同的长度
- 所有单词只由小写字母构成
- 字典中不存在重复的单词
- 你可以假设两个单词非空，且二者不相同

实例1：
输入：
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
输出：
[
    ["hit", "hot", "dot", "dog", "cog"]
    ["hit", "hot", "lot", "log", "cog"]
]

## 解题思路
先用DFS求出最短距离
再用DFA求出最短距离路径