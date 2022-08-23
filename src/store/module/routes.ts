import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, constantRoutes } from '@/router'
import { Roles } from '@/type'

interface RouteStoreState {
  routes: RouteRecordRaw[]
  addRoutes: RouteRecordRaw[]
}

// roles是当前登录的账户的角色的数组
function hasPermission(route: RouteRecordRaw, roles: Roles[]) {
  if (route.meta?.roles === undefined) {
    return true
  }
  if (roles.length === 0) {
    return false
  }
  for (const role of roles) {
    if (route.meta.roles.some(item => item === role)) {
      return true
    }
  }
  return false
}

export const useRoutesStore = defineStore('routes', {
  state: (): RouteStoreState => ({
    routes: [],
    addRoutes: [],
  }),
  actions: {
    generatorRoutes(roles: Roles[]): Promise<RouteRecordRaw[]> {
      return new Promise(resolve => {
        const dynamicRoutes: RouteRecordRaw[] = []
        for (let i = 0; i < asyncRoutes.length; i++) {
          if (hasPermission(asyncRoutes[i], roles)) {
            dynamicRoutes.push(asyncRoutes[i])
          }
        }
        if (this.addRoutes.length === 0) {
          this.addRoutes = dynamicRoutes
        }
        if (this.routes.length === 0) {
          this.routes.push(...constantRoutes, ...dynamicRoutes)
        }
        resolve(this.routes)
      })
    },
  },
})
