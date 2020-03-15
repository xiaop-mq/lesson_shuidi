<template>
  <div id="app">
    <!-- <el-button
    loading
    round
    plain
    type="success"
    icon="el-icon-edit"
    @click="upload"
    >编辑按钮</el-button>
    <el-button
    type="text"
    >文本</el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right">
      </i></el-button> -->
    <div>
      <!-- 容器式组件 -->
    <!-- <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
    <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <el-button-group>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
  </el-button-group> -->
  <el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
  </el-badge> 
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
    <el-badge type="primary" value="hot" class="item">
  <el-button size="small">评论</el-button>
  </el-badge> 
  <!-- html风格 attribute -->
  <el-badge is-dot :hidden="isHideDot" class="item">数据查询</el-badge>
    </div>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ElButton from './components/ElButton.vue'
import ElButtonGroup from './components/ElButtonGroup.vue'
import ElBadge from './components/ElBadge.vue'
export default {
  name: 'App',
  data() {
    return {
      isHideDot:true
    }
  },
  components: {
    // HelloWorld
    ElButton,
    ElButtonGroup,
    ElBadge
  },
  methods: {
    upload(evt) {
      console.log(evt)
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHideDot = false
    },3000)
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
.item {
  margin-right: 20px;
}
</style>
