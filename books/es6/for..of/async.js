// 代码更加简洁
// good
// function fetch() {
//     return (
//         fetchData()
//         .then(() => {
//             return "done"
//         })
//     )
// }

// better
// async function(){
//     await fetchData()
//     return "done"
// }