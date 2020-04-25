function backtrack(list, tempList, nums) {
    if(tempList.length === nums.length) return list.push(
        [...tempList]);
        for(let i = 0; i < nums.length; i++){
            if(tempList.includes(nums[i])) continue;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums);
            tempList.pop();
        }
}

var permute = function(nums){
    const list = [];
    backtrack(list,[],nums)
    return list
};
console.log(permute([1,2,3]));