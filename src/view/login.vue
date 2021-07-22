
<template>
    <div class="login">
      <div class="login-title">{{title}}</div>
      <el-tabs v-model="activeName" @tab-click="handleClick" :stretch='true' class="login-tabs">
        <el-tab-pane label="欢迎登录" name="login">
          <el-form :model="loginFrom" status-icon ref="loginFrom" label-width="100px" class="demo-roleFrom">
            <el-form-item label="用户名" prop="username" :rules="[{required: true,message: '用户名不能为空'}]">
              <el-input type="text" ref="loginUsername" v-model="loginFrom.username" placeholder="请输入用户名" @keyup.enter.native="keyupLoginClick($event)"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="[{required: true,message: '密码不能为空'}]">
              <el-input type="password" ref="loginPassword" v-model="loginFrom.password" placeholder="请输入密码" @keyup.enter.native="loginSubmit('loginFrom')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="loginSubmit('loginFrom')">登  录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="用户注册" name="registered">
          <el-form :model="regFrom" status-icon ref="regFrom" label-width="100px" class="demo-roleFrom">
            <el-form-item label="用户名" prop="username" :rules="[{required: true,message: '用户名不能为空'}]">
              <el-input type="text" ref="regUsername" v-model="regFrom.username" placeholder="请输入用户名" @keyup.enter.native="keyupRegClick($event)"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="[{required: true,message: '密码不能为空'}]">
              <el-input type="password" ref="regPassword" v-model="regFrom.password" placeholder="请输入密码" @keyup.enter.native="regSubmit('regFrom')"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="login-btn" @click="regSubmit('regFrom')">注  册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import { login, registered } from '../api/getData'
export default {
  name: 'login',
  data () {
    return {
      // 登录
      loginFrom: {
        username: '',
        password: ''
      },
      // 注册
      regFrom: {
        username: '',
        password: ''
      },
      activeName: 'login',
      title: '用户登录',
      userList: [] // 注册用户
    }
  },
  mounted () {

  },
  methods: {
    // 登录回车聚焦密码框
    keyupLoginClick (event) {
      if (event) {
        event.target.blur()
        this.$refs.loginPassword.focus()
      }
    },
    // 注册回车聚焦密码框
    keyupRegClick (event) {
      if (event) {
        event.target.blur()
        this.$refs.regPassword.focus()
      }
    },
    // 切换tab
    handleClick (tab) {
      if (tab.label) {
        this.title = tab.label
      }
    },
    // 登录事件
    loginSubmit (loginFrom) {
      this.$refs[loginFrom].validate((valid) => {
        if (valid) {
          let userList = localStorage.getItem('userList')
          let data = {
            username: this.loginFrom.username,
            password: this.loginFrom.password,
            userList: JSON.parse(userList)
          }
          login(data).then(res => {
            let data = res.data.data.verifySuccess
            if (data.resultCode === '0') {
              this.$message({
                message: data.message,
                type: 'success'
              })
              this.$router.push({path: '/main'})
            } else if (data.resultCode === '190000001') {
              this.$message.error(data.message)
            }
          }).catch(err => {
            console.log('err', err)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 注册事件
    regSubmit (regFrom) {
      this.$refs[regFrom].validate((valid) => {
        if (valid) {
          let userList = localStorage.getItem('userList')
          let data = {
            username: this.regFrom.username,
            password: this.regFrom.password,
            userList: JSON.parse(userList)
          }
          registered(data).then(res => {
            let data = res.data.data.verifySuccess
            if (data.resultCode === '0') {
              this.userList = data.userLists
              localStorage.setItem('userList', JSON.stringify(this.userList))
              this.$message({
                message: data.message,
                type: 'success'
              })
            } else if (data.resultCode === '190000002') {
              this.$message.error(data.message)
            } else if (data.resultCode === '190000003') {
              this.$message.error(data.message)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  destroyed () {
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
    .login-btn{
      width: 100%;
    }
  }
}
</style>
