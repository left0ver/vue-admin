import { defineStore } from 'pinia'
import type { Token } from '../type'

export const useTokenStore = defineStore<'token', Token>('token', {
  persist: {
    enabled: true,
  },
  state: () => ({
    access_token: '',
    refresh_token: '',
    // 这个可以通过一个接口，使用token发送请求，后端判断会话有没有过期，返回前端，前端设置对应的值
    sessionTimeout: true,
  }),
  actions: {
    updateAccessToken(newAccessToken: string) {
      this.access_token = newAccessToken
    },
    updateRefreshToken(newRefreshToken: string) {
      this.refresh_token = newRefreshToken
    },
    resetToken() {
      this.$reset()
    },
  },
})
