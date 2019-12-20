
     
var Animation = function(opts) {
    // els 参数 
    var dur = 0.3,
      amount = '55%',
      tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
      });
    tl
      .add(
        fromLeft(
        //   [els[0],els[2]]
        opts.leftAnimated
        )
      )
      .add(
        fromRight(
        //   els[1]
        opts.rightAnimated
        )
      )
  
    function fromLeft(el) {
      return TweenMax.from(el, dur, {x:"-=" + amount, autoAlpha:0.2})

    }
    function fromRight(el) {
      return TweenMax.from(el, dur, {x:"+=" + amount, autoAlpha:0.2})
    }
  }
  // 流程式的， 不适合复用 
  
  
  // var tl = new TimelineMax({
  //   repeat: -1,
  //   yoyo: true,
  //   repeatDelay: 1
  // })
  // tl.from(['#box1, #box3'], 0.3, {x: '-=55%'});
  // tl.from(['#box2'], 0.3, {x: '+=55%'});
 
 //流程式代码
//  tl=new TimelineMax({
//     repeat:-1,//一直动
//     //repeat :1,动一下
//     yoyo:true,//像悠悠球一样弹
//     repeatDelay:1
// })
// {/* from从哪开始动 0.3速度 {x:'-=55%'}左移宽度的55% {x:'+=55%'}右移宽度的50% */}
// tl.from(['#box1,#box3'],0.3,{x:'-=55%'});
// tl.from(['#box2'],0.3,{x:'+=55%'});