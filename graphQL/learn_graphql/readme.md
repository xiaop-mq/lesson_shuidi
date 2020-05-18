## graphQL:是一种面向数据的 API 查询风格
- 简历技能点描述，从 词 -> 话语(vue + graphQL) -> 花语

- 看下这个URL 设计的科学吗？ 需求：文章posts  查看某一篇文章 url设置为：/posts/show/1
RESTFul  URL里不要有动词
不科学的，/posts/1
因为 RESTFUL 它是后端暴露资源的解决方案，多年来一直受追捧

RESTFUL特点
URL 设计之美

1. HTTP 动词
    GET（SELECT）：从服务器取出资源（一项或多项）。
    POST（CREATE）：在服务器新建一个资源。
    PUT（UPDATE）：在服务器更新资源（客户端提供完整资源数据）。
    PATCH（UPDATE）：在服务器更新资源（客户端提供需要修改的资源数据）。
    DELETE（DELETE）：从服务器删除资源。
    动词仅限这些
2. 每一个 URL 代表一种资源 /posts/1 资源就是名词
3. 客户端通过http动词，对服务器资源进行操作，实现表现层状态转化


设计一个URL 网上汇款，从账户1 向账户2 汇款520元，URL怎么设计。
资源是什么？发生了什么样的状态改变呢？
/transfer  动词， 

/account/1/transfer/520/2  动词  /posts/show/1
/transaction (交易)  -> website 独立的模块 HTTP 1.1
POST  状态转化 传递from=1&to=2&amount=500.00 req body


- 不过，在近几年来，RESTFUL被前端新的理念革命了，GraphQL,让前端更好的使用及定义数据接口，swagger 自动胜场API文档，Apollo 做到不浪费数据， 数据格式更加严谨

vuex -> api -> mockjs -> server 传统的RESTFUL可以做的事情
restful 主要用谓语动词，受后端的控制大，
替换成：vuex -> GraphQL(api) -> mockjs -> server
GraphQL 让前端对数据拥有了更大的话语权，