- 设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间

1. 使用对象
本来直接使用对象编写的，利用可以获得对象的全部键值对，将值的活跃度按 最前面的是要被删除的，最后面的是最活跃的 排序，键值对按照对象的key排序，然而最后发现，新加入的key-vaue 不是直接放到最后，而是按码值排序，因此会一直按'0''1''2'排序
