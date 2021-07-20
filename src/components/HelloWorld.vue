<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 生命周期--start
  beforeCreate () {
    // 执行beforeCreate事件钩子，开始监控data对象数据变化，vue内部初始化事件
    console.log('beforeCreate')
  },
  created () {
    // created事件钩子开始执行，编译模板，把data里面的数据和模板生成html
    console.log('created')
  },
  beforeMount () {
    // 开始执行beforeMount挂载钩子，注意此时还没有生成html到页面上去，用上面编译好的html内容替换el属性指向的dom对象或者选择权对应的html标签里的内容
    console.log('beforeMount')
  },
  mounted () {
    // 挂载完成，也就是模板中的html已经渲染到了html页面中，此时一般可以做一些ajax操作，mounted只会执行一次！！实时监控数据变化，随时更新dom
    console.log('mounted')
  },
  beforeUpdate () {
    // 更新之前的事件钩子
    console.log('beforeUpdate')
  },
  updated () {
    // 更新完成后的钩子
    console.log('updated')
  },
  beforeDestroy () {
    // vue实例销毁前执行的钩子
    console.log('beforeDestroy')
  },
  destroyed () {
    // vue实例销毁
    console.log('destroyed')
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

  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
