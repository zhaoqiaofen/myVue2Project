<template>
  <div class="comreg">
    <el-form :model="regFrom" status-icon ref="regFrom" label-width="100px" class="demo-roleFrom">
      <el-form-item label="用户名" prop="username" :rules="[{required: true,message: '用户名不能为空'}]">
        <el-input type="text" ref="regUsername" v-model.trim="regFrom.username" placeholder="请输入用户名" @keyup.enter.native="keyupRegClick($event)"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{required: true,message: '密码不能为空'}]">
        <el-input type="password" ref="regPassword" v-model.trim="regFrom.password" placeholder="请输入密码" @keyup.enter.native="regSubmit('regFrom')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="regSubmit('regFrom')">注  册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { registered } from '../api/getData'
export default {
  name: 'comregistered',
  data () {
    return {
      // 注册
      regFrom: {
        username: '',
        password: ''
      },
      userList: [] // 注册用户
    }
  },
  methods: {
    // 注册回车聚焦密码框
    keyupRegClick (event) {
      if (event) {
        event.target.blur()
        this.$refs.regPassword.focus()
      }
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
  }
}
</script>
<style lang="less" scoped>
.login-btn{
  width: 100%;
}
</style>
