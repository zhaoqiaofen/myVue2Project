<template>
  <div class="userlist">
    <el-row style="padding-bottom: 20px">
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="searchVal" clearable></el-input>
      </el-col>
      <el-col :span="6">
        <el-date-picker v-model="dataVal" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="6" style="text-align:left">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" ref='multipleTable' border height="390">
      <el-table-column prop="number" label="编号" width="110">
      </el-table-column>
      <el-table-column show-overflow-tooltip prop="name" label="姓名" width="120" align="center">
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
    <el-pagination
      background
      layout="prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage">
    </el-pagination>
  </div>
</template>
<script>
import {getuserlist} from '../api/getData'
export default {
  name: 'userList',
  data () {
    return {
      tableData: [],
      total: 100, // 总条数
      pageSize: 15, // 每页显示的总条数
      currentPage: 1, // 当前页
      searchVal: '',
      dataVal: ''
    }
  },
  created: function () {
    this.getUserList()
  },
  methods: {
    getUserList () {
      let data = {
        currentPage: this.currentPage
      }
      getuserlist(data).then(res => {
        let data = res.data.data.verifySuccess
        if (data.resultCode === '0') {
          this.tableData = data.body.userList
          this.total = data.body.totalNum
          this.pageSize = data.body.pageSize
          this.currentPage = data.body.currentPage
        }
      })
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this.$refs.multipleTable.bodyWrapper.scrollTop = 0
    },
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    }
  }
}
</script>
<style lang="less" scoped>
.el-table .cell{
  text-align: center;
}
.el-pagination{
  padding: 15px 5px !important;
}
</style>
