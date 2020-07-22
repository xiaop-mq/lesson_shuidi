// 判断是否为URL
const isUrl = str => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/.test(str)

// e.g.
isUrl('https://www.baidu.com') // true
isUrl('https://www') // false

