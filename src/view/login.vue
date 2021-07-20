
<template>
    <div class="login">
      <div class="login-title">欢迎登录</div>
      <el-form :model="roleFrom" status-icon ref="roleFrom" label-width="100px" class="demo-roleFrom">
        <el-form-item label="用户名" prop="username" :rules="[{required: true,message: '用户名不能为空'}]">
          <el-input type="text" ref="username" v-model="roleFrom.username" @keyup.enter.native="keyupClick($event)"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{required: true,message: '密码不能为空'}]">
          <el-input type="password" ref="password" v-model="roleFrom.password" @keyup.enter.native="submit('roleFrom')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="submit('roleFrom')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import { login } from '../api/getData'
export default {
  name: 'login',
  data () {
    return {
      roleFrom: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {

  },
  methods: {
    // 回车聚焦密码框
    keyupClick (event) {
      if (event) {
        event.target.blur()
        this.$refs.password.focus()
      }
    },
    submit (roleFrom) {
      this.$refs[roleFrom].validate((valid) => {
        if (valid) {
          let data = {
            username: this.roleFrom.username,
            password: this.roleFrom.password
          }
          login(data).then(res => {
            if (res.data.data.verifySuccess) {
              this.$router.push({path: '/'})
            }
          }).catch(err => {
            console.log('err', err)
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
  .demo-roleFrom{
    width: 50%;
  }
  .login-btn{
    width: 100%;
  }
}
</style>
