// 设计并实现Promise.race()
Promise._race = promises => new Promise((resolve, reject) =>{
    promises.forEach(promises => {
        promises.then(resolve, reject)
    })
})