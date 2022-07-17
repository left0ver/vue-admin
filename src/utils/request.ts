import axios, { AxiosResponse } from 'axios'
import handleError from './handleError'
import { getRefreshToken, getAccessToken, setAccessToken } from '@/utils/auth'
import { authKey, noNeedTokenApi } from '@/settings'
import router from '@/router'

// 当第一个请求正在请求/auth/refresh的时候，后面如果有请求，则保存到该数组中
// eslint-disable-next-line no-unused-vars
let requests: Array<(token: string) => void> = []
let refreshTokenTask: null | Promise<AxiosResponse<any, any>> = null
// 使用记忆化的手段来保证只会同时调用一次refreshToken
const refreshToken = () => {
  if (refreshTokenTask) return refreshTokenTask
  refreshTokenTask = service
    .post('/auth/refresh', {}, { headers: { [authKey]: getRefreshToken() } })
    .finally(() => {
      refreshTokenTask = null
    }) as Promise<AxiosResponse<any, any>>
  return refreshTokenTask
}

const service = axios.create({
  // 你自己开发的时候可以设置baseUrl
  baseURL: process.env.BASE_URL,
  timeout: 5000,
})
service.interceptors.request.use(
  config => {
    const token = getAccessToken()
    if (
      !noNeedTokenApi.some(item => {
        if (config.url === undefined) {
          return true
        }
        // 有一个包含则return true，some函数返回true，则不需要设置token,如果都不包含，则some函数返回false,则会设置token
        return config.url.includes(item)
      })
    ) {
      config.headers![authKey] = token
    }
    return config
  },
  error => {
    handleError(error)
    console.log(error)
  },
)

service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    // 任何失败的状态码都会触发error,你可以在这里进行错误的处理
    // 401未授权,或者token过期
    const { config } = error.config
    if (
      error.response.status === 401 &&
      !error.config.url.includes('/auth/refresh')
    ) {
      // 请求refreshToken的接口，重新获取token
      refreshToken()
        .then(res => {
          const { accessToken } = res.data
          setAccessToken(accessToken)
          config.headers[authKey] = accessToken
          // 遍历数组，重新再请求
          requests.forEach(cb => cb(accessToken))
          return service(config)
        })
        .catch(err => {
          // 请求refreshToken的接口出错,可能是refreshToken过期
          router.replace('/login')
          handleError('token过期,请重新登录')
          return Promise.reject(err)
        })
        .finally(() => {
          requests = []
        })
      // 正在刷新token
      if (refreshTokenTask !== null) {
        // 把这期间的请求保存在requests数组中
        return new Promise(resolve => {
          requests.push((token: string) => {
            config.headers[authKey] = token
            resolve(service(config))
          })
        })
      }
    }
    // 其他错误，您可以继续处理
    handleError(error)
    return Promise.reject(error)
  },
)

// service.prototype.request = async <T = any, D = any>(
//   config: AxiosRequestConfig<D>,
// ): Promise<T> => {
//   try {
//     const res = await service.request(config)
//     return Promise.resolve(res.data)
//   } catch (err) {
//     return Promise.reject(err)
//   }
// }

export default service
