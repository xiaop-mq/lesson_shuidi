// htmlstr模板字符串
// html 解析成 DOM 树
// 分析对象
let htmlStr = `<html>
 <head></head>
 <body>
    <div></div>
 </body>
</html>
`;
// 分词 词法分析
// 分析元素节点
// DOM树 节点有 类型 所以加上type
// { type: element, tagName: 'html', tag: 'startTag'}
// { type: element, tagName: 'html', tag: 'endTag'}

// 当前正在处理的html标签
let currentToken = null;

function parse(string) {
    let state = start;
    for (let c of string) {
        // \n
        state = state(c);
    }
}
parse(htmlStr);

function start(c) {
    if (c === '<') {
        return tagOpen; // 标签的开始
    } else {
        return start;
    }
}
function tagOpen(c) {
    if (c === '/') {
        // </h 结束标签
        return endTagOpen
    } else if (c.match(/^[a-zA-Z]$/)) {
        // <h  开始标签 去拼接 
        currentToken = {
            type: 'element',
            tag: 'startTag',
            tagName: c
        }
        return tagName;
    }
}
function tagName(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        currentToken.tagName += c;
        // 
        return tagName;
        // 什么时候拼接完？？
    } else if (c === '>') {
        // 提交 当前 token
        emit(currentToken);
        return start;
    }
}
function endTagOpen(c) {
    if (c.match(/^[a-zA-Z]$/)) {
        //   拼接工作
        currentToken = {
            type: 'element',
            tag: 'endTag',
            tagName: c
        }
        // 也要拼接
        return tagName;
    }
}
function emit(token) {
    console.log(token);
}