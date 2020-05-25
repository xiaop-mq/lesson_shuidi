var LRUCache = function(capacity){
    this.map = capacity;
    this.cache = {};
    this.length = 0;
}

LRUCache.prototype.get = function(key){
    if(this.capacity[key] != undefined) {
        var temp = this.capacity[key];
        // 对象的键值会自动按照码值进行排序
        delete this.cache[key];
        console.log(this.cache);
        this.cache[key] = temp;

        return temp;
    } else {
        return -1;
    }
}

LRUCache.prototype.put = function(key,value) {
    if(this.length < this.map && this.cache[key] == undefined){
        this.cache[key] = value;
        this.length++;
    }else if(this.length == this.cap && this.cache[key] == undefined){
        // Object.keys(object)可以获得对象的所有键值
        var arr = Object.keys(this.cache);
        delete this.cache[arr[0]];
        this.cache[key] = value;
    }
    console.log(this.cache);
}