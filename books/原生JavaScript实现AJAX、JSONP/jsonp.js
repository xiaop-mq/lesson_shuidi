// 用原生JavaScript如何实现。
// 依旧是ajax()方法里添加JSONP，后面会将两者整合在一起，JSONP的配置参数主要多了一个jsonp参数，它就是你的回调函数名。著作权归作者所有。

function ajax(params) {   

    params = params || {};   
  
    params.data = params.data || {};   
  
    var json = params.jsonp ? jsonp(params) : json(params);      
  
  
  
    // jsonp请求   
  
    function jsonp(params) {   
  
      //创建script标签并加入到页面中   
  
      var callbackName = params.jsonp;   
  
      var head = document.getElementsByTagName('head')[0];   
  
      // 设置传递给后台的回调参数名   
  
      params.data['callback'] = callbackName;   
  
      var data = formatParams(params.data);   
  
      var script = document.createElement('script');   
  
      head.appendChild(script);    
  
   
  
      //创建jsonp回调函数   
  
      window[callbackName] = function(json) {   
  
        head.removeChild(script);   
  
        clearTimeout(script.timer);   
  
        window[callbackName] = null;   
  
        params.success && params.success(json);   
  
      };    
  
  
  
      //发送请求   
  
      script.src = params.url + '?' + data;    
  
  
  
      //为了得知此次请求是否成功，设置超时处理   
  
      if(params.time) {   
  
       script.timer = setTimeout(function() {   
  
         window[callbackName] = null;   
  
         head.removeChild(script);   
  
         params.error && params.error({   
  
           message: '超时'   
  
         });   
  
       }, time);   
  
      }   
  
    };    
  
  
  
    //格式化参数   
  
    function formatParams(data) {   
  
      var arr = [];   
  
      for(var name in data) {   
  
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));   
  
      };   
  
  
  
      // 添加一个随机数，防止缓存   
  
      arr.push('v=' + random());   
  
      return arr.join('&');   
  
    }   
  
  
  
    // 获取随机数   
  
    function random() {   
  
      return Math.floor(Math.random() * 10000 + 500);   
  
    } }
    // 注意：因为 script 标签的 src 属性只在第一次设置的时候起作用，导致 script 标签没法重用，所以每次完成操作之后要移除；

    // 使用实例：
ajax({   

  url: 'test.php',    // 请求地址

  jsonp: 'jsonpCallback',  // 采用jsonp请求，且回调函数名为"jsonpCallbak"，可以设置为合法的字符串

  data: {'b': '异步请求'},   // 传输数据

  success:function(res){   // 请求成功的回调函数

    console.log(res);   

  },

  error: function(error) {}   // 请求失败的回调函数

});

// 在这里后台使用PHP处理：
// <?php

//    $data = array('type'=>'jsonp');

//    $callback = isset($_GET['callback']) ? trim($_GET['callback']) : '';  

//    echo $callback.'('.json_encode($data).')';
// 注意：别漏了用函数名与数据拼接返回。

// function jsonpCallback() {}



// <?php 

//   echo 'jsonpCallback('.$data.')';

