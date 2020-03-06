<template>
  <div id="app">
    时间 {{t | format_date}}
    <div>{{moment()}}</div>
    <div>{{moment().format('YY-MM-DD HH:mm:ss')}}</div>
    <div>过去多少时间 {{moment().diff(moment(t), 'minutes')}}分钟前</div>
    <!-- 优惠卷 -->
    <div>{{moment('2020-02-29').add(2, 'day').format('YY-MM-DD')}}</div>
  </div>
</template>

<script>
 // 添加moment库 yarn add moment
import moment from 'moment';

export default {
  name: 'App',
  // 过滤器 人民币， =》 美元  12345  12,345
  // filters: {
  //   // format_data(value) {
  //   //   console.log(value);
  //   //   const date = new Date(value);
  //   //   console.log(date)
  //   //   return  `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  //   // }
  // },
  data() {
    return {
      // 后端小哥哥
      t: 1583393185121, //时间戳
      moment
    }
  },
  // 计算属性
  computed: {

  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
