# 模块的语法
from typing import List
# 面向对象的语法
class Solution:
    # 箭头表示返回值类型 冒号表示{}区块 缩进函数
    def removeDuplicates(self,nums:List[int]) ->int:
        if nums:
            slow = 0
            for fast in range(1,len(nums)):
                if nums[fast]!= nums[slow]:
                    slow += 1
                    nums[slow] = nums[fast]
            return slow + 1
        else:
            return 0

x = Solution()
print(x.removeDuplicates([1,1,2]))
