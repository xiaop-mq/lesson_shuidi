// 考虑重复
function createCode(){
    let area = '0123456789cdovhnsbdbvBCJDSKBVSVBFHANCJDSLBVLDF',
        codeText = '';
    while(codeText.length < 4){
        let ran = Math.round(Math.random() * (61 - 0) + 0),
          char = area.charAt(ran)
        if(!codeText.toUpperCase().includes(char.toUpperCase())){
            codeText += char;
        }
    }
    codeBox.innerHTML = codeText;
}
createCode();
codeBox.onclick = createCode;