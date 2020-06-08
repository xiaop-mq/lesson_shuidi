const _ = require('lodash');
// jquery主要做的是动态DOM 查找元素节点 dom $('#app').html('dfdfdf')
// $ -> jquery   
// _ dom -> 查找结点， 修改 -> 数据改变 -> 动态html 可以编译后再更新到页面 
// _ -> loadsh(underscore + backbone)
{/* <template>
    <Loading />
</template>
DOM细节，DOM交流 通过模板编译 */}

const complier = _.template('<h1><%= title %></h1>') //  _.template设置为模板
// ajax , RIA
const html = complier({title: 'My Compoment'})

setTimeout(() =>{
    console.log(complier({title: 'My Compoment'}))
},3000)
// console.log(html)