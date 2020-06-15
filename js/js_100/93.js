// 给定带下为m和n的有序数组nums1和nums2.请找出这两个数的中心点.
var findMedianSortedArrays = function(nums1, nums2){
    var nums = [];
    while(nums1.length && nums.length){
        if(nums1[0] < nums2[0]){
            nums.push(nums1.shift())
        } else {
            nums.push(nums2.shift())
        }
    }
    nums = nums.concat(nums1, nums2)
    var median
    if(nums.length % 2){
        median = nums[Math.floor(nums.length / 2)]
    } else {
        var m = nums.length / 2
        median = (nums[m - 1] + nums[m]) / 2
    }
    return median
}