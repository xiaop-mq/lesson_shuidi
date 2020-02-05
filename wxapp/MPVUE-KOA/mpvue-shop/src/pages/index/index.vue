<template>
<div class="index">
  <!-- 头部的搜索  -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <!-- swiper滑屏轮播 indicator-dots是否展示轮播图上面的点 自动轮播 轮播间隔时间为3秒 circular循环不间断的轮播 duration图片之间的推动feel -->
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <!-- 无具体意义 代表插入一个标签 -->
        <block v-for="(item,index) in banner" :key="index">
          <!-- 每一张轮播图 -->
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
</div>
</template>

<script>
import amapFile from "../../utils/amap-wx.js";
import { mapState, mapMutations } from "vuex";
import { get } from '../../utils'
export default {
  data () {
    return {
      banner:[]
      }
    },
    computed: {
    ...mapState(["cityName"])
  },
  methods: {
    ...mapMutations(["update"]),
    toMappage() {
      var _this = this;
      // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
      wx.getSetting({
        success(res) {
          //如果没有同意授权,打开设置
          if (!res.authSetting["scope.userLocation"]) {
            wx.openSetting({
              success: res => {
                _this.getCityName();
              }
            });
          } else {
            wx.navigateTo({
              url: "/pages/mappage/main"
            });
          }
        }
      });
    },
    getCityName() {
      var _this = this;
      var myAmapFun = new amapFile.AMapWX({
        key: "2fc2b5d1a061327f2b6a121d89d59466"
      });
      myAmapFun.getRegeo({
        success: function (data) {
          //成功回调
          console.log(data);
          // data[0].regeocodeData.formatted_address
          // _this.cityName = data[0].regeocodeData.formatted_address;
          _this.update({ cityName: data[0].regeocodeData.formatted_address });
        },
        fail: function (info) {
          //失败回调
          console.log(info);
          //如果用户拒绝授权
          // 默认为北京
          _this.cityName = "北京市";
          _this.update({ cityName: "北京市" });
        }
      });
    },
    toSearch() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },

    async getData(){
      const data = await get('/index/index')//http://localhost:5757/lm/index/index
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";

</style>