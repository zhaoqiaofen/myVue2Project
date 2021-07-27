<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%
}
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  /*滚动条宽度*/
  height: 10px;
  /*滚动条高度*/
  background-color: white;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 0px white;
  background-color: #cce5fc;
  /*滚动条的背景颜色*/
  border-radius: 20px;
}
.el-table__fixed {
  height: calc(100% - 12px) !important;
}
.el-table__fixed-right {
  height: calc(100% - 12px) !important;
}
.el-table__fixed-right::before,
.el-table__fixed::before {
  background-color: unset !important;
}
</style>
