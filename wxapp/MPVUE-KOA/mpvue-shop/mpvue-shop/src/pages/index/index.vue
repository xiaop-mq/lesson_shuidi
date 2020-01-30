<template>
<div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      cityName: '南昌'
    }
  },
  methods: {
    toMappage () {
      //通过wx.getSetting 先查询用户是否授权 "scoped.record"
    let _this = this;
     wx.getSetting({
        success(res) {
          //如果没有同意授权,打开设置
          // console.log(res)
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                //获取授权位置信息
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        },
        fail: (err) =>{
          console.log(err)
        },
        complete: () =>{}
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";

</style>