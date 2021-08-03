<template>
  <div class="modifydialog">
    <el-dialog title="新增用户信息" :visible="visible" :before-close="handleDialogClose" :close-on-click-modal="false">
      <el-form :model="form" ref="form" label-width="100px" label-position="left">
        <el-form-item label="编号" prop="number" :rules="[{required: true,message: '编号不能为空'}]">
          <el-input v-model="form.number" placeholder="请输入编号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name" :rules="[{required: true,message: '姓名不能为空'}]">
          <el-input v-model.lazy="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone" :rules="[{required: true,message: '电话不能为空'}]">
          <el-input type="number" v-model="form.phone" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :rules="[{required: true,message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}]">
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address" :rules="[{required: true,message: '地址不能为空'}]">
          <el-input v-model="form.address" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-radio v-model="form.identity" label="管理员">管理员</el-radio>
          <el-radio v-model="form.identity" label="普通用户">普通用户</el-radio>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status" active-value='1' inactive-value='2'></el-switch>
        </el-form-item>
        <el-form-item label="部门" prop="department" :rules="[{required: true,message: '部门不能为空'}]">
          <el-select v-model="form.department" placeholder="请选择部门">
            <el-option label="研发部门" value="研发部门"></el-option>
            <el-option label="运营部门" value="运营部门"></el-option>
            <el-option label="售后部门" value="售后部门"></el-option>
            <el-option label="财务部门" value="财务部门"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime" :rules="[{required: true,message: '创建时间不能为空'}]">
          <el-date-picker
            v-model="form.createTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button>重 置</el-button>
          <el-button type="primary" @click="addBtn('form')">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'modifydialog',
  props: {
    // 弹窗的显示与隐藏
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
  },
  data () {
    return {
      form: {
        number: '', // 编号
        name: '', // 姓名
        phone: '', // 电话
        email: '', // 邮箱
        address: '', // 地址
        identity: '普通用户', // 身份
        status: 1, // 状态 1开启 2禁用
        department: '', // 部门
        createTime: ''
      }
    }
  },
  methods: {
    // 弹窗右上角关闭按钮
    handleDialogClose () {
      this.$emit('hiddenAddDialogEvent')
    },
    // 确定新增
    addBtn (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$emit('addItem', this.form)
        } else {
          return false
        }
      })
    }
  },
  // 生命周期--start
  beforeCreate () {
    // 执行beforeCreate事件钩子，开始监控data对象数据变化，vue内部初始化事件
    console.log('子组件beforeCreate')
  },
  created () {
    // created事件钩子开始执行，编译模板，把data里面的数据和模板生成html
    console.log('子组件created')
  },
  beforeMount () {
    // 开始执行beforeMount挂载钩子，注意此时还没有生成html到页面上去，用上面编译好的html内容替换el属性指向的dom对象或者选择权对应的html标签里的内容
    console.log('子组件beforeMount')
  },
  mounted () {
    // 挂载完成，也就是模板中的html已经渲染到了html页面中，此时一般可以做一些ajax操作，mounted只会执行一次！！实时监控数据变化，随时更新dom
    console.log('子组件mounted')
  },
  beforeUpdate () {
    // 更新之前的事件钩子
    console.log('子组件beforeUpdate')
  },
  updated () {
    // 更新完成后的钩子
    console.log('子组件updated')
  },
  beforeDestroy () {
    // vue实例销毁前执行的钩子
    console.log('子组件beforeDestroy')
  },
  destroyed () {
    // vue实例销毁
    console.log('子组件destroyed')
  }
}
</script>

<style lang="less">
.el-form-item__content{
  text-align: left !important;
}
.el-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 !important;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
}

.el-dialog__body {
    overflow: auto;
}
</style>
