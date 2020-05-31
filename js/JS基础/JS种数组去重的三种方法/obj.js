// 对象的键值对方式
// 原理：对用对象中属性名不能重复的特点，先建立一个空对象
// 然后依次循环数组中的每一项，把此项作为obj对象的属性名和属性值
// 在添加的时候,如果这个属性名对应的值已经存在,说明此项重复
// 删除掉此项
let arr = [1, 2, 3, 1, 1, 4, 2, 3];
let obj = {};
for(let i = 0; i <  arr.length; i++){
    let item = arr[i];
    if(obj[item] !== undefined){
        arr[i] = arr[arr.length - 1];
        arr.length--;
        i--;
        continue;
    }
    obj[item] = item;
}
console.log(arr);

// 优点:只有一个循环,所以性能很好.
// 缺点:如果数组中出现对象则存在问题.
// 如果数组中存在数字10和字符串'10'，也会认为是重复的
// 数组中的值如果是undefined也会出现问题
