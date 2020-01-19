// 有没有可能少一个内层循环
// for x 
//   y x+y=EventTarget
//   target-x nums 序号？

const twoSum = (nums,target) => {
    // let map = {};//对象字面量
    let map = new Map();
    let res = {};//存下标数组
    nums.forEach((e,i) => map.set(e,i));//map
    console.log(map);
    for (let i = 0;i<nums.length;i++){
        // let j = map[target-nums[i]];//hash
        let j = map.get[target-nums[i]];
        // console.log(target-nums[i]);
        if (j && j !== i){
            res = [i,j];
            break;
        }
    }
    return res;
}
console.log(twoSum([2,7,11,15],9));