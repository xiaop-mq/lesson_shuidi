var o = {
    a: 10,
    b:{
        function() {
            // 如果函数中有this，但是他没有被上级调用的话就会指向window
            // 如果函数中有this,但是它被上级调用则指向调用的对象
            console.log(this.a); // undefined
            // 尽管对象b中没有属性a，这个this指向的也是对象b，
            // 因为this只会指向它的上一级对象，不管这个对象中有没有this要的东西
        }
    }
}
a.b.fn();