
<template>
    <div class="login">
      <div class="login-title">{{title}}</div>
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch='true' class="login-tabs">
        <el-tab-pane label="欢迎登录" name="login">
          <keep-alive>
            <com-login></com-login>
          </keep-alive>
        </el-tab-pane>
        <el-tab-pane label="用户注册" name="registered">
          <keep-alive>
            <com-registered></com-registered>
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import ComLogin from '../components/ComLogin.vue'
import ComRegistered from '../components/ComRegistered.vue'
export default {
  name: 'login',
  components: {
    'com-login': ComLogin,
    'com-registered': ComRegistered
  },
  data () {
    return {
      activeName: 'login',
      title: '用户登录'
    }
  },
  methods: {
    // 切换tab
    handleClick (tab) {
      if (tab.label) {
        this.title = tab.label
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  background-image: url('../assets/img/3.jpg');
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  .login-title{
    width: 50%;
    font-size: 23px;
    font-weight: 600;
    color: #3a8ee6;
    margin-bottom: 20px;
    margin-left: 50px;
  }
  .login-tabs{
    width: 50%;
    margin-left: 50px;
    .demo-roleFrom{
      width: 100%;
    }
  }
}
</style>
