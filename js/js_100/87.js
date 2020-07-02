// 如何判断在搜索框中输入的是正确的URL？
function isUrl(url) {
    try{ // 正确的输出
        new URL(url);
        return true;
    }catch{ // 捕获异常
        return false;
    }
}