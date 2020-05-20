// 查找 a
function match(string) { // match()方法用于字符串查找
    for (let c of string) {
        if (c === 'a') return true;
    }
    return false;
}
// 查找ab 连续关系
function matchAb(string) {
    let foundA = false;
    for (let c of string) { // 遍历字符串
        if (c === 'a') {
            foundA = true;
        } else if (foundA && c === 'b') {
            return true;
        } else { // 既不是a也不是b
            // 重新开始 匹配 ab  foundA 失效了
            foundA = false;
        }
    }
    return false;
}
console.log(matchAb('acbab'))

// 难以维护
// abcdef
function matchAbcdef(string) {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;
    for (let c of string) {
        if (c === 'a') {
            foundA = true;
            // 连续匹配
            // 状态机转移
            // 不符合转移就重新开始
        } else if (foundA && c === 'b') {
            foundB = true;
        } else if (foundB && c === 'c') {
            foundC = true;
        } else if (foundC && c === 'd') {
            foundD = true;
        } else if (foundD && c === 'e') {
            foundE = true;
        } else if (foundE && c === 'f') {
            return true;
        } else {
            // 重新开始 匹配 ab  foundA 失效了
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}


// abc
// 连接起来
// 更加灵活
function newMatch(string) {
    let state = foundA;
    for (let c of string) {
        state = state(c)
    }
    return state === end
}
// 单独出来
function foundA(c) {
    if (c === 'a') {
        // 告诉下一个状态
        return foundB;
    } else {
        // 重新从起点开始匹配
        return foundA;
    }
}
function foundB(c) {
    if (c === 'b') {
        return foundC;
    } else {
        return foundA;
    }
}
function foundC(c) {
    if (c === 'c') {
        return end;
    } else {
        return foundA;
    }
}
// 不是递归 不用return foundA
function end() {
    return end
}
console.log(newMatch('abcbacbc'))