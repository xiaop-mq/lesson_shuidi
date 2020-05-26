var findDuplicate = function(nums) {
    let slowPointer = 0
    let fastPointer = 0
    while (true) {
      slowPointer = nums[slowPointer]
      fastPointer = nums[nums[fastPointer]]
      if (slowPointer == fastPointer) {
        let _slowPointer = 0
        while (nums[_slowPointer] !== nums[slowPointer]) {
          slowPointer = nums[slowPointer]
          _slowPointer = nums[_slowPointer]
        }
        return nums[_slowPointer]
      }
    }
  };
  