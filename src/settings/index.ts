import { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '../router/index'
import accounts from './account'

function getWhiteList(prefix: string, routes: Array<RouteRecordRaw>) {
  const whiteList: string[] = []
  for (const route of routes) {
    if (route.children !== undefined && route.children.length > 0) {
      whiteList.push(...getWhiteList(`${prefix}${route.path}/`, route.children))
    } else {
      whiteList.push(prefix + route.path)
    }
  }
  return whiteList
}

export const whiteList: string[] = [...getWhiteList('', constantRoutes)]

// 将token设置在cookie中,的key
export const accessTokenKey: string = 'access_token'
export const refreshTokenKey: string = 'refresh_token'

// 请求头中验证token的字段名
export const authKey: string = 'authorization'
// 设置哪些不需要携带token的接口，比如登录,注册接口，其余接口会在请求拦截器中携带token
export const noNeedTokenApi: string[] = ['/vue-admin/login']
export const loginPage: string = '/login'

export { accounts }
