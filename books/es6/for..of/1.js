for(const v of ['a', 'b', 'c']){
    console.log(v) // a b c
}

for(const [i, v] of ['a', 'b', 'c']){
    console.log(i, v)
}
// 0  "a"
// 1  "b"
// 2  "c"