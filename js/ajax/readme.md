## XMLHttpRequest与Fetch的区别
- fetch对外暴露的接口更加现代化，fetch是基于promise的，XHR是基于回调的。
- fetch可以很容易的被其他技术使用，例如：可以在serviceworker中监听浏览器发出的请求，可以在中间做代理，使用fetch发出这个请求 浏览器请求 ——> ServiceWorker -> 拿到资源
- fetch只要接收到状态码，就是请求成功，HTTP错误(404/500)不会导致返回的promise变成reject
- fetch可以通过AbortController和AbsortSignal来终止