/**
 *
 * http配置
 *
 */

import axios from 'axios'
import store from '../store'
import {getToken, getAppId} from '@/util/auth'
import {Message} from 'element-ui'
import errorCode from '@/const/errorCode'
import NProgress from 'nprogress' // progress bara
import 'nprogress/nprogress.css' // progress bar style
// 超时时间
axios.defaults.timeout = 30000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
NProgress.configure({showSpinner: false})// NProgress Configuration

// HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start() // start progress bar
  if (store.getters.access_token) {
    config.headers['Authorization'] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  config.headers['appId'] = getAppId()
  return config
}, error => {
  return Promise.reject(error)
})

// HTTPresponse拦截
axios.interceptors.response.use(data => {
  NProgress.done()
  if (data.data.code > 0) {
    Message({
      message: data.data.msg,
      type: 'error'
    })
    return Promise.reject(new Error(data.data.msg))
  } else {
    return data
  }
}, error => {
  NProgress.done()
  const errMsg = error.toString()
  const code = errMsg.substr(errMsg.indexOf('code') + 5)
  Message({
    message: errorCode[code] || errorCode['default'],
    type: 'error'
  })
  if (error.config.url === '/auth/authentication/removeToken') {
    // 登出过滤 继续执行then
    return Promise.resolve()
  }
  // 显示错误 不继续执行then
  return Promise.reject(new Error(error))
})

export default axios

export const get = (url, data) => {
  return axios.get(url, {params: data})
}

export const post = (url, data) => {
  return axios.post(url, data)
}

export const postForm = (url, data) => {

  const form = new FormData()
  for (const key in data) {
    form.append(key, data[key])
  }
  const param = new URLSearchParams(form)
  return axios.post(url, param)
  //   , {
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   }
  // }
}

export const del = (url, data) => {
  return axios.delete(url, {params: data})
}

export const put = (url, data) => {
  return axios.put(url, data)
}
