- 美团 app  to  custom 
  to business
  ```
  var xhr = new XMLHttpRequest();
  //设置xhr请求的超时时间
  xhr.timeout = 3000;
  //设置响应返回的数据格式
  xhr.responseType = "text";
  //创建一个 post 请求，采用异步
  xhr.open('POST', '/server', true);
  //注册相关事件回调处理函数
  xhr.onload = function(e) { 
    if(this.status == 200||this.status == 304){
        alert(this.responseText);
    }
  };
  xhr.ontimeout = function(e) { ... };
  xhr.onerror = function(e) { ... };
  xhr.upload.onprogress = function(e) { ... };
  
  //发送数据
  xhr.send(formData);

  ```
