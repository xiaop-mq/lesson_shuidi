var sumNums = function(n){
    return multi(n, n+1, 0) >> 1
};
function multi(a, b, sum){
    if(b === 0) return sum

    if(b & 1) return multi(a, b-1, sum + a)
    return multi(a + a, b >> 1, sum)
}