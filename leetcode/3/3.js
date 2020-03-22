var lengthOfLongestSubstring = function(s) {
    let hash = {};
    let max = 0;
    let left = 0;
    for(let i = 0; i < s.length; i++) {
        let v = s[i];
        if (hash[v] >= left){
            left = hash[v] + 1;
        }
        hash[v] = i;// 遍历过的数据都存起来
        let len = i - left + 1;
        if(max < len) max = len;
    }
    return max;
};