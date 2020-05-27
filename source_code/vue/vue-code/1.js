// 手写代码？  源码 
// Vue 的闭包骚炒作


// 判断一个字符串在传入的字符串中 
// "刘子民"   "前端王者,前端刘子民,帅哥"  true
// vue 闭包
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    // console.log(map);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true
    }
    return expectsLowerCase
      ? val => map[val.toLowerCase()]
      : val => map[val]
  }
  
  
  // div, p , html, 自定义组件 还是 html标签
  let isMyName = makeMap("前端王者,刘子民,帅哥", true); 
  // console.log(isMyName('智伟'));
  const isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  )
  
  
  const isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  )
  
  
  //记忆函数  缓存功能
  
  
  // const isReservedAttr = makeMap('style,class')
  // vue , 缓存计算结果, 
  
  
  function cached(fn) {
    const cache = Object.create(null);
    return function cachedFn(str) {
      const hit = cache[str]
      return hit || (cache[str] = fn(str))
    }
  }
  
  
  const cacheDivCheck = cached(isHTMLTag);
  let cacheStyle = cacheDivCheck('div');
  console.log(cacheStyle);
  // console.log(isHTMLTag('button'));
  // console.log(isSVG('animate'));
  
  
  // 还可以优化吗？ 性能