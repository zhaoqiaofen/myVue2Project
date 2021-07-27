import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkname: 'Login' */ '../view/login.vue')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import(/* webpackChunkname: 'Main' */ '../view/main.vue'),
      redirect: {
        name: 'UserList'
      },
      children: [
        {
          path: '/main/userList',
          name: 'UserList',
          component: () => import(/* webpackChunkname: 'UserList' */ '../view/userList.vue')
        },
        {
          path: '/main/interfaceList',
          name: 'InterfaceList',
          component: () => import(/* webpackChunkname: 'InterfaceList' */ '../components/ComInterfaceList.vue')
        }
      ]
    }
  ]
})
