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
    <!--修改弹窗-->
    <com-modify-dialog :visible="visible" :dataItem="dataItem" @hiddenDialogEvent="hiddenDialogEvent" @updateItem="updateItemEvent($event)"></com-modify-dialog>
  </div>
</template>
<script>
import {getuserlist} from '../api/getData'
import ComModifyDialog from '../components/ComModifyDialog.vue'
export default {
  name: 'userList',
  components: {
    'com-modify-dialog': ComModifyDialog
  },
  data () {
    return {
      tableData: [],
      total: 100, // 总条数
      pageSize: 15, // 每页显示的总条数
      currentPage: 1, // 当前页
      searchVal: '', // 搜索内容
      dataVal: '', // 选择日期
      visible: false, // 是否显示修改弹窗
      dataItem: {}, // 要传给修改弹窗的当前值
      index: 0 // 点击修改时当前列表的下标
    }
  },
  watch: {
    dataItem (newVal, oldVal) {
      if (newVal) {
        this.tableData[this.index] = newVal
      }
    }
  },
  methods: {
    // 获取用户列表
    getUserList () {
      let data = {
        currentPage: this.currentPage
      }
      getuserlist(data).then(res => {
        let data = res.data.data.verifySuccess
        if (data.resultCode === '0') {
          this.tableData = data.body.userList
          this.total = data.body.userList.length
          this.pageSize = data.body.pageSize
          this.currentPage = data.body.currentPage
        }
      })
    },
    // currentPage 改变时会触发
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this.$refs.multipleTable.bodyWrapper.scrollTop = 0
    },
    // pageSize 改变时会触发
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    // 删除当前数据
    handleDelete (index, item) {
      this.$confirm('确定删除该用户吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1)
        this.total = this.tableData.length
        if (this.tableData.length > this.pageSize && this.tableData.length % this.pageSize === 0 && this.currentPage !== 1) {
          this.currentPage = this.currentPage - 1
        } else {
          this.currentPage = this.currentPage
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 显示修改弹窗
    handleEdit (index, item) {
      this.visible = true
      // let str = 'hellow  world!' // 注意hellow与world之前有两个空格
      // console.log(str.trim().split(/\s+/))
      this.dataItem = item // 当前值
      this.index = index // 当前下标
    },
    // 隐藏修改弹窗
    hiddenDialogEvent () {
      this.visible = false
    },
    // 修改后的值
    updateItemEvent (event) {
      this.visible = false
      this.dataItem = event
    }
  },
  // 生命周期--start
  beforeCreate () {
    // 执行beforeCreate事件钩子，开始监控data对象数据变化，vue内部初始化事件
    console.log('父组件beforeCreate')
  },
  created () {
    // created事件钩子开始执行，编译模板，把data里面的数据和模板生成html
    console.log('父组件created')
  },
  beforeMount () {
    // 开始执行beforeMount挂载钩子，注意此时还没有生成html到页面上去，用上面编译好的html内容替换el属性指向的dom对象或者选择权对应的html标签里的内容
    console.log('父组件beforeMount')
  },
  mounted () {
    // 挂载完成，也就是模板中的html已经渲染到了html页面中，此时一般可以做一些ajax操作，mounted只会执行一次！！实时监控数据变化，随时更新dom
    console.log('父组件mounted')
    this.getUserList()
  },
  beforeUpdate () {
    // 更新之前的事件钩子
    console.log('父组件beforeUpdate')
  },
  updated () {
    // 更新完成后的钩子
    console.log('父组件updated')
  },
  beforeDestroy () {
    // vue实例销毁前执行的钩子
    console.log('父组件beforeDestroy')
  },
  destroyed () {
    // vue实例销毁
    console.log('父组件destroyed')
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
