// var foo = 1;
// // referenced name 就是属性的名称
// // 对应的Reference是：
// var fooReference = {
//     base: EnvironmentRecord,
//     name: 'foo',
//     strict: false
// };

// var foo = {
//     bar: function () {
//         return this;
//     }
// };

// foo.bar(); // foo

// // bar对应的Reference是：
// var BarReference = {
//     base: foo,
//     propertyName: 'bar',
//     strict: false
// };

var foo = 1;

var fooReference = {
    base: EnvironmentRecord,
    name: 'foo',
    strict: false
};

GetValue(fooReference) // 1;

