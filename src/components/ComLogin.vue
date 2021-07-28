<template>
  <div class="comlogin">
    <el-form :model="loginFrom" status-icon ref="loginFrom" label-width="100px" class="demo-roleFrom">
      <el-form-item label="用户名" prop="username" :rules="[{required: true,message: '用户名不能为空'}]">
        <el-input type="text" ref="loginUsername" v-model.trim="loginFrom.username" placeholder="请输入用户名" @keyup.enter.native="keyupLoginClick($event)"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[{required: true,message: '密码不能为空'}]">
        <el-input type="password" ref="loginPassword" v-model.trim="loginFrom.password" placeholder="请输入密码" @keyup.enter.native="loginSubmit('loginFrom')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="loginSubmit('loginFrom')">登  录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../api/getData'
export default {
  name: 'comlogin',
  data () {
    return {
      // 登录
      loginFrom: {
        username: '',
        password: ''
      },
      userList: [] // 注册用户
    }
  },
  // 生命周期--start
  beforeCreate () {
    // 执行beforeCreate事件钩子，开始监控data对象数据变化，vue内部初始化事件
    console.log('登录beforeCreate')
  },
  created () {
    // created事件钩子开始执行，编译模板，把data里面的数据和模板生成html
    console.log('登录created')
  },
  beforeMount () {
    // 开始执行beforeMount挂载钩子，注意此时还没有生成html到页面上去，用上面编译好的html内容替换el属性指向的dom对象或者选择权对应的html标签里的内容
    console.log('登录beforeMount')
  },
  mounted () {
    // 挂载完成，也就是模板中的html已经渲染到了html页面中，此时一般可以做一些ajax操作，mounted只会执行一次！！实时监控数据变化，随时更新dom
    console.log('登录mounted')
  },
  beforeUpdate () {
    // 更新之前的事件钩子
    console.log('登录beforeUpdate')
  },
  updated () {
    // 更新完成后的钩子
    console.log('登录updated')
  },
  beforeDestroy () {
    // vue实例销毁前执行的钩子
    console.log('登录beforeDestroy')
  },
  destroyed () {
    // vue实例销毁
    console.log('登录destroyed')
  },
  // 生命周期--end
  // 计算属性
  computed: {

  },
  // 侦听属性
  watch: {

  },
  // 方法
  methods: {
    // 登录回车聚焦密码框
    keyupLoginClick (event) {
      if (event) {
        event.target.blur()
        this.$refs.loginPassword.focus()
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
    }
  }
}
</script>

<style scoped>
.login-btn{
  width: 100%;
}
</style>
