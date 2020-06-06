- flex-grow           伸
弹性布局，flex-shrink  缩
flex-flow 按值的比例分配
flec-shrink flex空间分配规则题


1. left + right > flex 盒子的宽度
这时的宽度是多少？
flex-shrink  2： 1
计算题， 规则 cssRules
500+400 - 600 = 300 
- left right   分担
超出分配比例的部分 500x2  400x1  5:2
- left 500 - 300*5/7 = 285
- right 400 - 300*2/7 = 


2. 盒子padding 子元素，
计算方式就要变了， 标准盒模型
left 
- 500+ 2*40 + 400 + 2*20 - 600 = 420
- 分配比例 不包含padding  5：2
- 580 - 420*5/7 = 280
  440 - 420*2/7 = 320

3. box-sizing: box-border IE模型
- 500+400-600 = 300
- 超出部分分配 2*420:360x1 = 7 : 3
- 500 - 300*7/10 = 290
  400 - 300x3/10 = 310