import accounts from './account'

export const whiteList: string[] = []

// 将token设置在cookie中,的key
export const accessTokenKey: string = 'access_token'
export const refreshTokenKey: string = 'refresh_token'

// 请求头中验证token的字段名
export const authKey: string = 'authorization'
// 设置哪些不需要携带token的接口，比如登录,注册接口，其余接口会在请求拦截器中携带token
export const noNeedTokenApi: string[] = ['/vue-admin/login']

export { accounts }
