import Cookies from 'js-cookie'

const TokenKey = 'x-access-token'
const AppIdKey = 'x-access-app-id'

export function getAppId() {
  return Cookies.get(AppIdKey)
}

export function setAppId(appId) {
  return Cookies.set(AppIdKey, appId)
}

export function getToken() {
  return 'Bearer ' + Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

