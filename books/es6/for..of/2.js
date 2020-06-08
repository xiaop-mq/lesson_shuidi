// promise示例

// bad
request(url, function(err, res, body) {
    if(err) handleError(err);
    fs.write('1.txt', body, function(err){
        request(url2, function(err, res, body){
            if(err) handleError(err)
        })
    })
});

// good
.request(url)
.then(function(result){
    return writeFileAsynv('1.txt', result)
})
.then(function(result){
    return request(url2)
})
.catch(function(e){
    handleError(e)
})

// 2. finally
fetch('file.json')
.then(data => data.json())
.catch(error => console.error(error))
.finally(() => console.log('finished'))