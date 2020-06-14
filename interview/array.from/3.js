// 作用3：使用值填充数组
const length = 3
const init = 0
const result = Array.from({ length }, () => init) 
result; // [0, 0, 0]

// 替代方法：fill()
const length = 3;
const init = 0
const result = Array.from(length).fill(init);

fillArray2(0, 3); // [0, 0, 0]