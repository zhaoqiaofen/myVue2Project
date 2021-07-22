<template>
    <div class="main">
        <el-container>
            <el-aside>
              <el-menu>
                <el-submenu index="1">
                  <template #title><i class="el-icon-message"></i>成员管理</template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                  <el-dropdown>
                    <i class="el-icon-setting"></i>
                    <template #dropdown>
                      <el-dropdown-menu>
                          <el-dropdown-item>退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                  <span>zqf</span>
                </el-header>
                <el-main>
                  <el-table :data="tableData" border height="500">
                    <el-table-column prop="number" label="编号" width="100">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="phone" label="电话" width="110" align="center">
                    </el-table-column>
                    <el-table-column show-overflow-tooltip prop="email" label="邮箱" width="120" align="center">
                    </el-table-column>
                    <el-table-column show-overflow-tooltip prop="address" label="地址" width="120" align="center">
                    </el-table-column>
                    <el-table-column prop="identity" label="身份" width="80" align="center">
                    </el-table-column>
                    <el-table-column prop="status" label="状态" width="70" align="center">
                      <template #default="scope">
                        <div class="name-wrapper">
                              <el-tag size="medium" :type="scope.row.status === '2' ? 'danger' : 'success'">{{ scope.row.status === '2' ? '禁用' : '启用' }}</el-tag>
                            </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="department" label="部门" align="center">
                    </el-table-column>
                    <el-table-column show-overflow-tooltip prop="createTime" label="创建时间" width="160" align="center">
                    </el-table-column>
                    <el-table-column fixed="right" width="130" prop="operation" label="操作">
                      <template #default="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                        <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {getuserlist} from '../api/getData'
export default {
  name: 'login',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      getuserlist().then(res => {
        let data = res.data.data.verifySuccess
        if (data.resultCode === '0') {
          this.tableData = data.body.userList
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  height: 100%;
  .el-aside{
    width: 200px !important;
  }
  .el-container{
    height: 100%;
    .el-header{
      text-align: right;
      font-size: 12px;
      line-height: 60px;
      background-color: aliceblue;
      box-shadow: 0 4px 20px 0 hsl(0deg 0% 82% / 70%);
      .el-icon-setting{
        margin-right: 15px
      }
    }
    .el-table .cell{
      text-align: center;
    }
  }
  .el-menu{
    height: 100%;
  }
}
</style>
