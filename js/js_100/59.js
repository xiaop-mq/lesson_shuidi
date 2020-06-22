// 给定两个数组，写一个方法来计算它们的交集

// 哈希表，时间复杂度O(m + n) m为nums1长度，n为nums2长度
const intersect = (num1, num2) =>{
    const map = {}
    const res = []
    for(let n of nums1){
        if(map[n]){
            map[n] = 1
        }
    }
    for(let n of nums2){
        if(map[n] > 0){
            res.push(n)
            map[n]--
        }
    }
    return res
}