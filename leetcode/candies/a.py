from typing import List 

class Solution:
    def distributeCandies(self,candies:List[int])->int:
        return min(len(set(candies)),len(candies) >> 1)


x = Solution()
print("最大的种类数为",x.distributeCandies([1,1,2,2,3,3]))