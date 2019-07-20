import request from '../plugins/axios'
import {encryption} from '@/utils/utils'


export const loginAccount = (userInfo) => {

  const user = encryption({
    data: userInfo,
    key: '1234567887654321',
    param: ['password']
  })

  let grantType = 'password'
  let scope = 'server'
  return request({
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic bGl5YW5nOnJlZC1wYWNrZXQ='
    },
    method: 'post',
    params: {
      username: user.username,
      password: user.password,
      randomStr: user.randomStr,
      code: user.code,
      grantType,
      scope
    }
  })
}
