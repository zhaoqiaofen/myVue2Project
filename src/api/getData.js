import axios from './ajax'

export function login (data) {
  return axios({
    url: 'https://www.fastmock.site/mock/41df8e03b8e8b3c970f06dc7c033b8b8/login/api/login',
    method: 'POST',
    data: data
  })
}
