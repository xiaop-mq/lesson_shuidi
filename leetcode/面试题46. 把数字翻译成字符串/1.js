const translateNum = (num) =>{
    const str = num.toString()
    const dfs = (str, pointer) =>{ // 随着dfs向下移动 pointer右移
        if(pointer >= str.length - 1) return 1 // 指针抵达边界和超出边界都会返回1
        const temp = Number(str[pointer] + str[pointer + 1]) // 考察该两位数
        if(temp >= 10 && temp <= 25) { // 落在[10, 25]
            return dfs(str, pointer + 1) + dfs(str, pointer + 2) // 两个分支的结果相加
        }else{
            return dfs(str, pointer + 1) // 只能翻译1位，返回一个分支结果
        }
    }
    return dfs(str, 0) // dfs的入口，指针其实位置为0
}