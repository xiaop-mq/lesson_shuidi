// 不考虑重复
function createCode(){
    let area = '0123456789cdovhnsbdbvBCJDSKBVSVBFHANCJDSLBVLDF',
    codeText = '';
for(let i = 1; i <= 4; i++){
        // 每一次循环获取一个随机的索引
    let ran = Math.round(Math.random() * (61 - 0) + 0),
        // 基于索引获取对应的字符
        char = area.charAt(ran);
    // 拼接到结果中
    codeText += char;
    }
    codeBox.innerHTML = codeText;
}
// 加载页面就执行一次
createCode();
// 点击CODEBOX盒子重新生成
createBox.onclick = createCode;