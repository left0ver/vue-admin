import { IUser } from 'mock/type'
import router from '@/router'
import { loginPage, whiteList } from '@/settings'
import { useUserInfoStore, useRoutesStore } from '@/store'
import request from '@/utils/request'
import { getAccessToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  const userInfoStore = useUserInfoStore()
  const routesStore = useRoutesStore()
  const token = getAccessToken()
  // 有token
  if (token !== '') {
    if (to.path === loginPage) {
      return next('/home')
    }
    // 没有角色
    if (userInfoStore.roles.length === 0) {
      // 请求用户信息的接口
      request
        .get<{ code: number; data?: IUser; errMsg?: string }>('/userInfo')
        .then(res => {
          if (res.data.code === 1) {
            userInfoStore.$patch({ ...res.data.data })
            routesStore.generatorRoutes(userInfoStore.roles)
            return next()
          }
          // 获取用户信息失败
          return next(false)
        })
        .catch(() => {
          return next(false)
        })
    }
    // 有角色,生成动态路由
    routesStore.generatorRoutes(userInfoStore.roles)
    return next()
  }
  // 没有token
  if (whiteList.includes(to.path)) {
    return next()
  }
  return next(loginPage)
})
