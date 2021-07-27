<template>
    <div class="main">
        <el-container>
            <el-aside>
              <el-menu default-active="/main/userList" :router="true">
              <div class="title">
                <img src="../assets/img/logo.png"/>
              </div>
                <el-menu-item index="/main/userList">
                  用户管理
                </el-menu-item>
                <el-menu-item index="/main/interfaceList">
                  接口管理
                </el-menu-item>
              </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                  <span style="padding:0 5px">zqf</span>
                  <el-dropdown>
                    <i class="el-icon-setting"></i>
                    <template #dropdown>
                      <el-dropdown-menu>
                          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </el-header>
                <el-main>
                  <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'login',
  components: {

  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    loginOut () {
      console.log('点击退出')
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  height: 100%;
  .el-aside{
    width: 200px !important;
    .title{
      padding: 20px 10px;
      img{
        width: 100%;
      }
    }
    .el-menu-item.is-active{
      background: #ecf5ff;
      color: #409eff;
    }
  }
  .el-container{
    height: 100%;
    .el-header{
      text-align: right;
      font-size: 12px;
      line-height: 60px;
      background-color: aliceblue;
      box-shadow: 0 4px 20px 0 hsl(0deg 0% 82% / 70%);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el-icon-setting{
        margin-right: 10px
      }
    }
  }
  .el-menu{
    height: 100%;
  }
}
</style>
