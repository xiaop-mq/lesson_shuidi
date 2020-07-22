// 判断是否支持webp图片格式
const canUseWebp = () =>(document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0)
canUseWebp()
// 新版chrome里为true，火狐里为false