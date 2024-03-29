import accounts from './account'

// function getWhiteList(prefix: string, routes: RouteRecordRaw[]) {
//   const whiteList: string[] = []
//   for (const route of routes) {
//     if (route.children !== undefined && route.children.length > 0) {
//       whiteList.push(...getWhiteList(`${prefix}${route.path}/`, route.children))
//     } else {
//       whiteList.push(prefix + route.path)
//     }
//   }
//   return whiteList
// }

// 路由白名单
export const whiteList: string[] = ['/login', '/register', '/forget']

// 将token设置在cookie中的key
export const accessTokenKey: string = 'access_token'
export const refreshTokenKey: string = 'refresh_token'

// 请求头中验证token的字段名
export const authKey: string = 'authorization'
// 设置哪些不需要携带token的接口，比如登录,注册接口，其余接口会在请求拦截器中自动携带token
export const noNeedTokenApi: string[] = ['/vue-admin/login']
// 登录页
export const loginPage: string = '/login'

export { accounts }
