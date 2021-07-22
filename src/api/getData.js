import axios from './ajax'

// 登录
export function login (data) {
  return axios({
    url: 'https://www.fastmock.site/mock/728223a9738ea2f156e346fc75d13f60/_shop01/api/login',
    method: 'POST',
    data: data
  })
}

// 注册
export function registered (data) {
  return axios({
    url: 'https://www.fastmock.site/mock/728223a9738ea2f156e346fc75d13f60/_shop01/api/registered',
    method: 'POST',
    data: data
  })
}

// 获取用户列表
export function getuserlist (data) {
  return axios({
    url: 'https://www.fastmock.site/mock/728223a9738ea2f156e346fc75d13f60/_shop01/api/getUserList',
    method: 'GET',
    data: data
  })
}
