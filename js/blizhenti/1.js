var a = {};
var b = { key: 'b' }; var c = { key: 'c' }
a[b] = 'b';
a[c] = 'c';
console.log(a[b]);