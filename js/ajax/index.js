function ajax({
    url = '',
    method = 'get',
    headers = {},
    data = ''
}) {
    return new Promise((resolve, reject) => {
        var xhr;
        if (window.XMLHttpRequest) { // code for IE7+, firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHttp'); // code for IE6, IE5
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    try {
                        var response = JSON.parse(xhr.responseText); // 获取数据
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error('Request failed: ' + xhr.statusText));
                }
            }
        }
        xhr.open(method, url, true); // 同步或异步请求：默认为 true(true 异步, false 同步)
        for (let key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(JSON.stringify(data));
    })
}